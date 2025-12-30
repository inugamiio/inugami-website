import { Component, input, OnInit, signal } from "@angular/core";

export interface InuDocItemComponentData {
    title: string;
    href: string;
    id: string;
    level: number;
}

@Component({
    selector: 'inu-doc-item',
    templateUrl: './doc-item.component.html',
    styleUrls: ['./doc-item.component.scss'],
    imports: [
    ]
})
export class InuDocItemComponent implements OnInit {

    //==================================================================================================================
    // ATTRIBUTES
    //==================================================================================================================
    title = input<string | undefined | null>('');
    href = input<string | undefined | null>('');
    id = input<string | undefined | null>('');
    level = input<number | undefined | null>(2);


    data = signal<InuDocItemComponentData | undefined>(undefined);

    //==================================================================================================================
    // ATTRIBUTES
    //==================================================================================================================
    ngOnInit(): void {
        const title = this.title() ? this.title() : '';
        const href = this.href() ? this.href() : '';
        const id = this.id() ? this.id() : '';
        const level =  this.level() ? this.level() : 2;

        const value : InuDocItemComponentData = {
            title: title!,
            href: href!,
            id: id!,
            level:level!
        }
        this.data.set(value);
    }
}