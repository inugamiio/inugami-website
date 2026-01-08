import { Component } from '@angular/core';
import { FrameworkAsideComponent } from '../framework-aside/framework-aside.component';
import { RouterLink } from '@angular/router';

@Component({
    templateUrl: './inugami_framework_monitoring.view.html',
    styleUrls: ['./inugami_framework_monitoring.view.scss'],
    imports:[
            FrameworkAsideComponent,
            RouterLink
    ]
})
export class InugamiFrameworkMonitoringView{
    

}