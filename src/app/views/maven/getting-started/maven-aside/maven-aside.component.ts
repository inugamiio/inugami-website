import { Component } from "@angular/core";
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
    selector: 'maven-aside',
    templateUrl: './maven-aside.component.html',
    styleUrls: ['./maven-aside.component.scss'],
    imports:[
        RouterLink,
        RouterLinkActive
    ]
})
export class MavenAsideComponent {
   
}