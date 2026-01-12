import { Routes } from '@angular/router';
import { HomeView } from './views/home/home.view';
import { InugamiDashboardGettingStartedView } from './views/inugami/dashboard/getting-started/inugami_dashboard_getting_started.view';
import { InugamiFrameworkGettingStartedView } from './views/inugami/framework/getting-started/inugami_framework_getting_started.view';
import { InugamiMavenGettingStartedView } from './views/maven/getting-started/inugami_maven_getting_started.view';
import { InugamiFrameworkExceptionView } from './views/inugami/framework/exception/inugami_framework_exception.view';
import { InugamiFrameworkTestabilityView } from './views/inugami/framework/testability/inugami_framework_testability.view';
import { InugamiFrameworkToolsView } from './views/inugami/framework/tools/inugami_framework_tools.view';
import { InugamiFrameworkMonitoringView } from './views/inugami/framework/monitoring/inugami_framework_monitoring.view';
import { InugamiFrameworkMultithreadingView } from './views/inugami/framework/multithreading/inugami_framework_multithreading.view';
import { InugamiFrameworkFunctionalView } from './views/inugami/framework/functional/inugami_framework_functional.view';
import { InugamiFrameworkReflectionView } from './views/inugami/framework/reflection/inugami_framework_reflection.view';
import { InugamiFrameworkComponentsView } from './views/inugami/framework/components/inugami_framework_components.view';
import { InugamiFrameworkMonitoringSensorView } from './views/inugami/framework/monitoring_sensor/inugami_framework_monitoring_sensor.view';
import { InugamiFrameworkMonitoringProviderView } from './views/inugami/framework/monitoring_provider/inugami_framework_monitoring_provider.view';
import { InugamiFrameworkMonitoringActiveMqView } from './views/inugami/framework/monitoring_activemq/inugami_framework_monitoring_activemq.view';
import { InugamiFrameworkMonitoringFeignView } from './views/inugami/framework/monitoring_feign/inugami_framework_monitoring_feign.view';


export const routes: Routes = [
    { path: "", component: HomeView },
    { path: "inugami", children:[
        { path: "framework", children:[
            { path: "", redirectTo:"getting-started",pathMatch: 'full'},
            { path: "getting-started", component: InugamiFrameworkGettingStartedView },
            { path: "components", component: InugamiFrameworkComponentsView },
            { path: "exception", component: InugamiFrameworkExceptionView },
            { path: "functional", component: InugamiFrameworkFunctionalView },
            { path: "monitoring", component: InugamiFrameworkMonitoringView },
            { path: "monitoring-activemq", component: InugamiFrameworkMonitoringActiveMqView },
            { path: "monitoring-feign", component: InugamiFrameworkMonitoringFeignView },
            { path: "monitoring-provider", component: InugamiFrameworkMonitoringProviderView },
            { path: "monitoring-sensor", component: InugamiFrameworkMonitoringSensorView },
            { path: "multithreading", component: InugamiFrameworkMultithreadingView },
            { path: "reflection", component: InugamiFrameworkReflectionView },
            { path: "testability", component: InugamiFrameworkTestabilityView },
            { path: "tools", component: InugamiFrameworkToolsView }
            
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
