import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {DashboardComponent} from '../route-components/dashboard/dashboard.component';
import {MainFlowComponent} from '../route-components/main-flow/main-flow.component';
import {ResultComponent} from '../route-components/result/result.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    data: { depth: 1 }
  },
  {
    path: 'mainFlow',
    component: MainFlowComponent,
    data: { depth: 2 }
  },
  {
    path: 'result',
    component: ResultComponent,
    data: { depth: 3 }
  },
  { path: '**', component: DashboardComponent, data: { depth: 1 } }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule {}

export const appRoutingProviders: any[] = [];
