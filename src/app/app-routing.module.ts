import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeView } from './modules/commons/views/home.view';

import { InugamiView } from './modules/inugami/views/inugami.view';
import { InugamiProjectAnalysisView } from './modules/inugami-maven-plugin/views/inugami.project.analysis';
import { InugamiApiView } from './modules/inugami/views/inugami.api.view';


const routes: Routes = [
  { path: "", component: HomeView },
  { path: "inugami", component: InugamiView},
  { path: "inugami/inugami_api", component: InugamiApiView},
  { path: "inugami-project-analysis-maven-plugin", component: InugamiProjectAnalysisView },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
