import { Component } from "@angular/core";
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
    selector: 'dashboard-aside',
    templateUrl: './dashboard-aside.component.html',
    styleUrls: ['./dashboard-aside.component.scss'],
    imports:[
        RouterLink,
        RouterLinkActive
    ]
})
export class DashboardAsideComponent {
   
}