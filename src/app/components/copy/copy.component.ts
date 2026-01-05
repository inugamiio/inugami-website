import { Component,  input, OnInit, signal } from "@angular/core";
@Component({
    selector: 'inu-copy',
    templateUrl: './copy.component.html',
    styleUrls: ['./copy.component.scss']
})
export class InuCopyComponent {
    //==================================================================================================================
    // ATTRIBUTES
    //==================================================================================================================
    iconClass =input.required<string>();
    label=input.required<string>();
    content = input.required<string>();
    copied = signal(false);
    

    //==================================================================================================================
    // INITIALIZE
    //==================================================================================================================
    copy() {
        navigator.clipboard.writeText(this.content())
            .then(()=> {
                this.copied.set(true);
                setTimeout(() => this.copied.set(false), 1000);
            });
    }
}