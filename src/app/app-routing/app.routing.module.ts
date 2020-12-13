import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {DashboardComponent} from '../routecomponents/dashboard/dashboard.component';
import {ContactInformationComponent} from '../uicomponents/contactinformation/contactinformation.component';
import {JobFinderComponent} from '../routecomponents/jobfinder/jobfinder.component';
import {PersonalInformationComponent} from '../uicomponents/personalinformation/personalinformation.component';
import {EducationInformationComponent} from '../uicomponents/educationinformation/educationinformation.component';
import {ForeignLanguageInformationComponent} from '../uicomponents/foreignlanguageinformation/foreignlanguageinformation.component';
import {WorkExperienceComponent} from '../uicomponents/workexperience/workexperience.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    outlet: 'primary'
  },
  {
    path: 'operate',
    component: JobFinderComponent,
    outlet: 'primary',
    children: [
      { path: 'contactInformation', component: ContactInformationComponent, outlet: 'sub' },
      { path: 'personalInformation', component: PersonalInformationComponent, outlet: 'sub' },
      { path: 'educationInformation', component: EducationInformationComponent, outlet: 'sub' },
      { path: 'foreignLanguageInformation', component: ForeignLanguageInformationComponent, outlet: 'sub' },
      { path: 'workExperiences', component: WorkExperienceComponent, outlet: 'sub' }
    ]
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
