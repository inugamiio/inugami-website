import {ApplicationConfig, importProvidersFrom, provideBrowserGlobalErrorListeners, signal} from '@angular/core';
import {provideRouter, withInMemoryScrolling} from '@angular/router';

import {routes} from './app.routes';
import {NgxGoogleAnalyticsModule, NgxGoogleAnalyticsRouterModule} from 'ngx-google-analytics';
import {INUGAMI_DEFAULT_ICONS, InugamiIconsUtils} from 'inugami-icons';
import {provideCacheTracking} from 'inugami-ng/services';
import {UuidUtils} from 'inugami-ng/utils'

const GOOGLE_ANALYICS = 'G-1683HZCMDJ';

InugamiIconsUtils.register(INUGAMI_DEFAULT_ICONS);

const APPLICATION = signal<string>('inugami');
const ENV         = signal<string>('PRD');
const SESSION_UID = signal<string>(UuidUtils.buildUid());
const VERSION     = signal<string>('4.2.6');

export const appConfig: ApplicationConfig = {
  providers: [
    provideCacheTracking({
                           env        : ENV,
                           sessionUid : SESSION_UID,
                           application: APPLICATION,
                           version    : VERSION
                         }),
    provideBrowserGlobalErrorListeners(),
    provideRouter(
      routes,
      withInMemoryScrolling({
                              anchorScrolling          : 'enabled',
                              scrollPositionRestoration: 'enabled'
                            })
    ),
    importProvidersFrom(
      NgxGoogleAnalyticsModule.forRoot(GOOGLE_ANALYICS),
      NgxGoogleAnalyticsRouterModule
    )
  ]
};
