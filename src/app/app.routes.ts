import { Routes } from '@angular/router';
import { HomeView } from './views/home/home.view';
import { InugamiDashboardGettingStartedView } from './views/inugami/dashboard/getting-started/inugami_dashboard_getting_started.view';
import { InugamiFrameworkGettingStartedView } from './views/inugami/framework/getting-started/inugami_framework_getting_started.view';
import { InugamiMavenGettingStartedView } from './views/maven/getting-started/inugami_maven_getting_started.view';
import { InugamiFrameworkExceptionView } from './views/inugami/framework/exception/inugami_framework_exception.view';

export const routes: Routes = [
    { path: "", component: HomeView },
    { path: "inugami", children:[
        { path: "framework", children:[
            { path: "", redirectTo:"getting-started",pathMatch: 'full'},
            { path: "getting-started", component: InugamiFrameworkGettingStartedView },
            { path: "exception", component: InugamiFrameworkExceptionView }
        ]},
        { path: "dashboard", children:[
            { path: "", redirectTo:"getting-started",pathMatch: 'full'},
            { path: "getting-started", component: InugamiDashboardGettingStartedView }
        ]}
    ]},
    { path: "maven", children:[
        { path: "inugami_project_analysis_maven_plugin", children:[
            { path: "", component: InugamiMavenGettingStartedView },
            { path: "getting-started", component: InugamiMavenGettingStartedView }    
        ]}



    ]},
    
]; 
