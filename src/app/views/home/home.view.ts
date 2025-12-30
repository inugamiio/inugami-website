import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { InuAnnoncement } from '../../components/annoncement/annoncement.component';
import { HttpServices } from '../../services/http.service';
import { Annoncement, AnnoncementExample, AnnoncementItem } from '../../components/annoncement/annoncement.model';
import { InuCodeComponent } from '../../components/code/code.component';

@Component({
    templateUrl: './home.view.html',
    styleUrls: ['./home.view.scss'],
    imports: [
        InuAnnoncement,
        InuCodeComponent
    ]
})
export class HomeView implements OnInit {

    //==================================================================================================================
    // ATTRIBUTES
    //==================================================================================================================
    private readonly httpServices = inject(HttpServices);


    protected annoncements = signal<Annoncement[]>([]);


    ngOnInit(): void {
        this.httpServices.getSourceCode('data/annoncements.xml')
            .subscribe({
                next: res => {
                    this.annoncements.set(this.parseAnnoncements(res));
                }
            });

    }


    //==================================================================================================================
    // parsing
    //==================================================================================================================
    parseAnnoncements(values:string): Annoncement[]{
        const result :Annoncement[] = [];
        const parser = new DOMParser();
        const node = parser.parseFromString(values,"text/xml");
        const annoncements = node.getElementsByTagName("annoncements")[0];

        for(let i=0; i<annoncements.childNodes.length; i++){
            if(annoncements.childNodes[i].nodeName == 'annoncement' ){
                result.push(this.parseAnnoncement(annoncements.childNodes[i] as Element, i));
            }
        }

        return result;
    }
    private parseAnnoncement(node:Element, index:number):Annoncement {
        let features: AnnoncementItem[] =[];
        let fix: AnnoncementItem[] =[];
        let description = null;
        for(let i=0; i<node.childNodes.length; i++){
            if(node.childNodes[i].nodeName == 'features' ){
                for(let j=0; j<node.childNodes[i].childNodes.length; j++){
                    if(node.childNodes[i].childNodes[j].nodeName == 'item' ){
                        features.push(this.parseAnnoncementItem(node.childNodes[i].childNodes[j] as Element));
                    }
                }
            }
            if(node.childNodes[i].nodeName == 'fix' ){
                for(let j=0; j<node.childNodes[i].childNodes.length; j++){
                    if(node.childNodes[i].childNodes[j].nodeName == 'item' ){
                        fix.push(this.parseAnnoncementItem(node.childNodes[i].childNodes[j] as Element));
                    }
                }
            }
            if(node.childNodes[i].nodeName == 'description' ){
                description= this.getNodeText(node.childNodes[i] as Element);
            }
        }

        return {
            id:index,
            application : node.getAttribute('application'),
            version : node.getAttribute('version'),
            date : node.getAttribute('date'),
            features: features,
            fix:fix,
            description:description
        };
    }

    private parseAnnoncementItem(node:Element):AnnoncementItem {
        let examples : AnnoncementExample[] = [];
        for(let i=0; i<node.childNodes.length; i++){
            if(node.childNodes[i].nodeName == 'example' ){
                examples.push(this.parseExample(node.childNodes[i] as Element));
            }
        }


        return {
            link:  node.getAttribute('link'),
            title:  node.getAttribute('title'),
            examples: examples
        };
    }
    
    private parseExample(node:Element): AnnoncementExample{
        let value = null;
        let description = null;

        for(let i=0; i<node.childNodes.length; i++){
            if(node.childNodes[i].nodeName == 'description' ){
                description = this.getNodeText(node.childNodes[i]  as Element);
            }
            if(node.childNodes[i].nodeName == 'value' ){
                value = this.getNodeText(node.childNodes[i]  as Element);
            }
        }

        return {
            value: value==null?'':value,
            description : description,
            type: node.getAttribute('type')
        }
    }

    getNodeText(node:Element):string{
        const result :string[] = [];

        for(let i=0; i<node.childNodes.length; i++){
            if(node.childNodes[i].nodeName == '#text' ){
                result.push((node.childNodes[i] as Text).data.replaceAll('\n' , ' ')) ;
            }
            if(node.childNodes[i].nodeName == '#cdata-section' ){
                result.push((node.childNodes[i] as CDATASection).data) ;
            }

            
        }
        return result.join(" ");
    }

}