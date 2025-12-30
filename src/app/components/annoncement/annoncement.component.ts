import { Component, computed, input, OnInit, signal } from "@angular/core";
import { Annoncement } from "./annoncement.model";


@Component({
    selector: 'inu-annoncement',
    templateUrl: './annoncement.component.html',
    styleUrls: ['./annoncement.component.scss'],
    providers: []
})
export class InuAnnoncement implements OnInit {
    //==================================================================================================================
    // ATTRIBUTES
    //==================================================================================================================
    data = input<Annoncement | undefined | null>(undefined);

    title = signal<string | null>('');
    application = signal<string | null>('');
    version = signal<string | null>('');
    date = signal<string | null>('');
    tag = signal<string | null>('');

    //==================================================================================================================
    // COMPUTED VALUES
    //==================================================================================================================
    anchor = computed(() => `#${this.application()}-${this.version()}`);
    hostClass = computed(() => `inu-announcement ${this.application()}`);

    //==================================================================================================================
    // INITIALIZE
    //==================================================================================================================
    ngOnInit(): void {
        const dataValue = this.data();
        if (dataValue) {
            this.title.set(dataValue.title!);
            this.application.set(dataValue.application!);
            this.version.set(dataValue.version!);
            this.date.set(dataValue.date!);
        }
    }




}