import { Component } from "@angular/core";
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
    selector: 'framework-aside',
    templateUrl: './framework-aside.component.html',
    styleUrls: ['./framework-aside.component.scss'],
    imports:[
        RouterLink,
        RouterLinkActive
    ]
})
export class FrameworkAsideComponent {
   
}