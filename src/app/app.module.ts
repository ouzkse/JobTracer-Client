import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatChipsModule } from '@angular/material/chips';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDividerModule } from '@angular/material/divider';
import { RouterModule } from '@angular/router';

import { ContactInformationComponent } from './uicomponents/contactinformation/contactinformation.component';
import { PopupComponent } from './uicomponents/popup/popup.component';
import { EducationInformationListComponent } from './uicomponents/educationinformationlist/educationinformationlist.component';
import { EducationDetailComponent } from './uicomponents/educationdetail/educationdetail.component';
import { EducationInformationComponent } from './uicomponents/educationinformation/educationinformation.component';
import { PersonalInformationComponent } from './uicomponents/personalinformation/personalinformation.component';
import { ForeignLanguageInformationComponent } from './uicomponents/foreignlanguageinformation/foreignlanguageinformation.component';
import { WorkExperienceComponent } from './uicomponents/workexperience/workexperience.component';
import { MatchResultComponent } from './uicomponents/matchresult/matchresult.component';
import { AppRoutingModule, appRoutingProviders } from './app-routing/app.routing.module';
import { DashboardComponent } from './routecomponents/dashboard/dashboard.component';
import { JobFinderComponent } from './routecomponents/jobfinder/jobfinder.component';
import { MainFlowComponent } from './routecomponents/main-flow/main-flow.component';
import {MatStepperModule} from '@angular/material/stepper';

@NgModule({
  declarations: [
    AppComponent,
    PopupComponent,
    ContactInformationComponent,
    EducationInformationComponent,
    EducationInformationListComponent,
    EducationDetailComponent,
    PersonalInformationComponent,
    ForeignLanguageInformationComponent,
    WorkExperienceComponent,
    MatchResultComponent,
    DashboardComponent,
    JobFinderComponent,
    MainFlowComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatOptionModule,
    MatSelectModule,
    FormsModule,
    MatIconModule,
    MatTableModule,
    HttpClientModule,
    MatAutocompleteModule,
    MatChipsModule,
    MatExpansionModule,
    MatDividerModule,
    RouterModule,
    MatStepperModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
