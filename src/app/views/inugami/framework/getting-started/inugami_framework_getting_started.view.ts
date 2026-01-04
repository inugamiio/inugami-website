import { Component, inject, OnInit, signal } from '@angular/core';
import { FrameworkAsideComponent } from '../framework-aside/framework-aside.component';
import { InuCodeComponent } from '../../../../components/code/code.component';
import { InuDocItemComponent } from '../../../../components/doc-item/doc-item.component';
import { RouterLink } from '@angular/router';
import { GoogleAnalyticsService } from 'ngx-google-analytics';

@Component({
    templateUrl: './inugami_framework_getting_started.view.html',
    styleUrls: ['./inugami_framework_getting_started.view.scss'],
    imports: [
        FrameworkAsideComponent,
        InuCodeComponent,
        InuDocItemComponent,
        RouterLink
    ]
})
export class InugamiFrameworkGettingStartedView implements OnInit{
    private readonly gaService = inject(GoogleAnalyticsService);


    ngOnInit(): void {
       this.gaService.pageView("/inugami/framework/getting-started");
    }
    
}