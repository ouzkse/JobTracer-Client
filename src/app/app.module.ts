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
import {MAT_DATE_LOCALE, MatLineModule, MatNativeDateModule, MatOptionModule} from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatChipsModule } from '@angular/material/chips';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDividerModule } from '@angular/material/divider';
import { RouterModule } from '@angular/router';
import { MatStepperModule, MatStepperIntl } from '@angular/material/stepper';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { MatPaginatorModule, MatPaginatorIntl } from '@angular/material/paginator';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';

import { ContactInformationComponent } from './ui-components/contact-information/contact-information.component';
import { PopupComponent } from './ui-components/popup/popup.component';
import { EducationInformationComponent } from './ui-components/education-information/education-information.component';
import { PersonalInformationComponent } from './ui-components/personal-information/personal-information.component';
import { ForeignLanguageInformationComponent } from './ui-components/foreign-language-information/foreign-language-information.component';
import { WorkExperienceComponent } from './ui-components/work-experience/work-experience.component';
import { MatchResultComponent } from './ui-components/match-result/match-result.component';
import { AppRoutingModule, appRoutingProviders } from './app-routing/app-routing.module';
import { DashboardComponent } from './route-components/dashboard/dashboard.component';
import { MainFlowComponent } from './route-components/main-flow/main-flow.component';
import { Interceptor } from './services/interceptor/interceptor';
import { LoadingDialogComponent } from './ui-components/loading-dialog/loading-dialog.component';
import { ResultComponent } from './route-components/result/result.component';
import { SettingsComponent } from './ui-components/settings/settings.component';
import { getTurkishPaginatorIntl } from './helpers/TurkishPaginatorIntl';
import { getTurkishStepperIntl } from './helpers/TurkishMatStepperIntl';
import {MatListModule} from '@angular/material/list';
import {MatSliderModule} from '@angular/material/slider';

@NgModule({
  declarations: [
    AppComponent,
    PopupComponent,
    ContactInformationComponent,
    EducationInformationComponent,
    PersonalInformationComponent,
    ForeignLanguageInformationComponent,
    WorkExperienceComponent,
    MatchResultComponent,
    DashboardComponent,
    MainFlowComponent,
    LoadingDialogComponent,
    ResultComponent,
    SettingsComponent
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
    MatStepperModule,
    NgxMatSelectSearchModule,
    MatPaginatorModule,
    MatBottomSheetModule,
    MatLineModule,
    MatListModule,
    MatSliderModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: Interceptor,
      multi: true
    },
    {
      provide: MAT_DATE_LOCALE,
      useValue: 'tr-TR'
    },
    {
      provide: MatPaginatorIntl,
      useValue: getTurkishPaginatorIntl()
    },
    {
      provide: MatStepperIntl,
      useValue: getTurkishStepperIntl()
    },
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
