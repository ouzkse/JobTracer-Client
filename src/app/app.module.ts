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

import { ContactInformationComponent } from './components/contactinformation/contactinformation.component';
import { PopupComponent } from './components/popup/popup.component';
import { EducationInformationListComponent } from './components/educationinformationlist/educationinformationlist.component';
import { EducationDetailComponent } from './components/educationdetail/educationdetail.component';
import { EducationInformationComponent } from './components/educationinformation/educationinformation.component';
import { PersonalInformationComponent } from './components/personalinformation/personalinformation.component';
import { ForeignLanguageInformationComponent } from './components/foreignlanguageinformation/foreignlanguageinformation.component';
import { WorkExperienceComponent } from './components/workexperience/workexperience.component';
import { MatchResultComponent } from './components/matchresult/matchresult.component';

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
    MatchResultComponent
  ],
  imports: [
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
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
