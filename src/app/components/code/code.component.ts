import { HttpClient } from "@angular/common/http";
import { Component, inject, input, OnInit, signal } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { SourceCode } from "./code.model";
import { HighlightJsDirective } from 'ngx-highlight-js';
import { CacheServices } from "../../services/cache.service";

@Component({
    selector: 'inu-code',
    templateUrl: './code.component.html',
    styleUrls: ['./code.component.scss'],
    imports : [
        HighlightJsDirective
    ]
})
export class InuCodeComponent implements OnInit {
    //==================================================================================================================
    // ATTRIBUTES
    //==================================================================================================================
    source = input<string | undefined | null>(undefined);
    url = input<string | undefined | null>(undefined);
    tag = input<string | undefined | null>(undefined);
    type = input<string | undefined | null>(undefined);
    title = input<string | undefined | null>(undefined);

    private readonly http = inject(HttpClient);
    private readonly cache = inject(CacheServices);
    
    sourceCode = signal<string>('');
    _title = signal<string>('');
    _type = signal<string>('');

    //==================================================================================================================
    // INITIALIZE
    //==================================================================================================================
    ngOnInit(): void {
        const url = this.url();
        if (url) {
            this.loadFormUrl(url);
        } else {
            const source = this.source();
            if (source) {
                this.sourceCode.set(source);
            }
        }
    }

    loadFormUrl(url: string) {
        const data = this.loadFormCache(url);
        if (data) {
            this.initSourceCode(data);
            return;
        }

        this.http.get(url, { responseType: 'text' })
            .subscribe({
                next: (res) => this.parseData(res, url)
            });
    }


    initSourceCode(data: SourceCode[]) {
        const values = data.filter(i => this.tag() === i.name);
        if (values.length > 0) {
            const sourceCodeValue = values[0];
            this.sourceCode.set(sourceCodeValue.content!);

            if (sourceCodeValue.title) {
                this._title.set(sourceCodeValue.title);
            }

            if (sourceCodeValue.type) {
                this._type.set(sourceCodeValue.type);
            }
        }
    }



    //==================================================================================================================
    // PARSE
    //==================================================================================================================
    parseData(response: string, url: string): void {
        const parser = new DOMParser();
        const node = parser.parseFromString(response, "text/xml");
        const sources = node.getElementsByTagName("src");

        const result: SourceCode[] = [];
        for (let i = 0; i < sources.length; i++) {
            let sourceNode = sources[i];
            let sourceName: string = sourceNode.getAttribute('name') ?? '';
            let sourceContent: string = this.cleanContent(sourceNode.textContent ?? '');
            let type: string | undefined = sourceNode.getAttribute('type') ?? undefined;
            let title: string | undefined = sourceNode.getAttribute('title') ?? undefined;

            result.push({
                name: sourceName,
                content: sourceContent,
                type: type,
                title: title
            })
        }
        this.setToCache(url, result);
        this.initSourceCode(result);
    }


    //==================================================================================================================
    // TOOLS
    //==================================================================================================================
    loadFormCache(url: string): SourceCode[] | undefined {
        const cacheKey = `inu-code_${url}`;
        const result : SourceCode[] | undefined  = this.cache.get(cacheKey);
        return result;
    }

    setToCache(url: string, value: any): void {
        const cacheKey = `inu-code_${url}`;
        if(value){
            this.cache.set(cacheKey,value);
        }
    }


    private cleanContent(value: string): string {
        let result: string[] = [];
        let buffer: string[] = [];

        let line = value.split("\n");

        let enableClean = false;
        for (let i = 0; i < line.length; i++) {
            if (enableClean || line[i].trim() != '') {
                buffer.push(line[i]);
                enableClean = true;
            }
        }
        enableClean = false;
        for (let i = buffer.length - 1; i >= 0; i--) {
            if (enableClean || buffer[i].trim() != '') {
                result.push(buffer[i]);
                enableClean = true;
            }
        }

        result.reverse();

        return result.join('\n');
    }
}