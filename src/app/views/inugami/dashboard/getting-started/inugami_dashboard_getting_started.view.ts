import { Component, inject, OnInit } from '@angular/core';
import { DashboardAsideComponent } from '../dashboard-aside/dashboard-aside.component';
import { GoogleAnalyticsService } from 'ngx-google-analytics';

@Component({
    templateUrl: './inugami_dashboard_getting_started.view.html',
    styleUrls: ['./inugami_dashboard_getting_started.view.scss'],
    imports :[
        DashboardAsideComponent
    ]
})
export class InugamiDashboardGettingStartedView  implements  OnInit {
    private readonly gaService = inject(GoogleAnalyticsService);

    ngOnInit(): void {
        this.gaService.pageView("/inugami/framework/dahsboard");
    } 

}