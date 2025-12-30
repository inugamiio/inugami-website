import { Component, OnInit } from '@angular/core';
import { DashboardAsideComponent } from '../dashboard-aside/dashboard-aside.component';

@Component({
    templateUrl: './inugami_dashboard_getting_started.view.html',
    styleUrls: ['./inugami_dashboard_getting_started.view.scss'],
    imports :[
        DashboardAsideComponent
    ]
})
export class InugamiDashboardGettingStartedView  implements  OnInit {
    
    ngOnInit(): void {
    
    }

}