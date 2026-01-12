import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet, UrlSegment } from '@angular/router';
import { SiteLink } from './models/website-model';
import { ViewportScroller } from '@angular/common';
import { GaActionEnum, GoogleAnalyticsService } from 'ngx-google-analytics';
import { filter } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit{
  private readonly gaService = inject(GoogleAnalyticsService);
  private readonly titleService = inject(Title)
  private router = inject(Router);
  private scroller = inject(ViewportScroller);
  protected readonly title = signal('inugami-website');
  protected links: WritableSignal<SiteLink[]> = signal<SiteLink[]>([
    {
      title: 'Inugami Framework',
      path: 'inugami/framework',
      children: [
        {
          links: [
            {
              title: 'Getting started',
              path: '/inugami/framework/getting-started'
            },
             {
              title: 'Exception',
              path: 'inugami/framework/exception'
            },
            {
              title: 'Functional',
              path: 'inugami/framework/functional'
            },
             {
              title: 'Monitoring',
              path: 'inugami/framework/monitoring'
            },
             {
              title: 'Testability',
              path: 'inugami/framework/testability'
            }
          ]
        }
      ]
    },
    {
       title: 'Inugami Dashboard',
       path: 'inugami/dashboard'
    },
    {
       title: 'inugami-project-analysis-maven-plugin',
       path: 'maven/inugami_project_analysis_maven_plugin'
    },
    {
       title: 'Inugami NG showcase',
       path: 'http://inugami.io/showcase',
       external: true,
       gaEvent:'inugamiio_showcase',
       gaCategory:'internal_link'
    },
    {
       title: 'GitHub',
       path: 'https://github.com/inugamiio',
       external: true,
       gaEvent:'github_inugamiio',
       gaCategory:'external_link'
    },
    {
       title: 'Maven central',
       path: 'https://central.sonatype.com/artifact/io.inugami/inugami/overview',
       external: true,
       gaEvent:'maven_central_inugamiio',
       gaCategory:'external_link'
    }
  ]);

  constructor() {
    this.router.events.pipe(
          takeUntilDestroyed(),
          filter(event => event instanceof NavigationEnd)).subscribe({
                next: (event:NavigationEnd) => {
                    this.pageTracker(event);
                }
            });
  }
  ngOnInit(): void {
   this.scroller.setOffset([0, 80]);

   
  }
  pageTracker(event: NavigationEnd) {
    if(event.url){
      const urlParts = event.url.split('/');
      const page = urlParts[urlParts.length-1];
      this.titleService.setTitle(`Inugami - ${page.split('#')[0]}`);
      this.gaService.event(GaActionEnum.VIEW_ITEM, event.url);
      this.gaService.pageView(event.url);

    }
  }

}
