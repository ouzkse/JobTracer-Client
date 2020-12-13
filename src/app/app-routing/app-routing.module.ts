import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {DashboardComponent} from '../route-components/dashboard/dashboard.component';
import {MainFlowComponent} from '../route-components/main-flow/main-flow.component';
import {MatchResultComponent} from '../ui-components/match-result/match-result.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'mainFlow',
    component: MainFlowComponent,
  },
  {
    path: 'result',
    component: MatchResultComponent
  },
  { path: '**', component: DashboardComponent }
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
