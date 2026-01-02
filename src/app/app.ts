import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { SiteLink } from './models/website-model';
import { ViewportScroller } from '@angular/common';

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

  ngOnInit(): void {
   this.scroller.setOffset([0, 80]);
  }
}
