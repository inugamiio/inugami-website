import { Component,  input, OnInit, signal } from "@angular/core";
import { InuIcon } from "inugami-icons";
@Component({
    selector: 'inu-copy',
    templateUrl: './copy.component.html',
    styleUrls: ['./copy.component.scss'],
    imports : [InuIcon]
})
export class InuCopyComponent {
    //==================================================================================================================
    // ATTRIBUTES
    //==================================================================================================================
    icon =input.required<string>();
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