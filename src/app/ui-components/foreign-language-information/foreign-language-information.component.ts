import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {getDefaultLanguageLevels} from '../../models/common/LanguageLevelCommonModel';
import {MatTableDataSource} from '@angular/material/table';
import {ForeignLanguageInformation} from '../../models/foreign-language-information/ForeignLanguageInformation';
import {CommonTaskService} from '../../services/tasks/common/common.task.service';
import {PopupComponent} from '../popup/popup.component';
import {ComponentType} from '@angular/cdk/overlay';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {PopupCommonModel} from '../../models/popup/PopupCommonModel';
import {PopupModelId} from '../../models/popup/PopupModelId';

@Component({
  selector: 'app-foreign-language-information',
  templateUrl: './foreign-language-information.component.html',
  styleUrls: ['foreign-language-information.component.css']
})
export class ForeignLanguageInformationComponent implements OnInit {

  componentTitle = 'Yabancı Dil Bilgileri';

  @Output() foreignLanguageEvent = new EventEmitter<Array<ForeignLanguageInformation>>();

  displayedColumns: string[] = ['name', 'level', 'action'];
  dataTableSource: MatTableDataSource<ForeignLanguageInformation> = new MatTableDataSource<ForeignLanguageInformation>();

  foreignInformationList: Array<ForeignLanguageInformation> = new Array<ForeignLanguageInformation>();
  count = 0;

  isAddingInfo = false;
  isNewInfoValid = false;

  newLanguageLevelFormControl = new FormControl('', [Validators.required]);
  languageLevelOptions = getDefaultLanguageLevels();

  private allForeignLanguages: Array<string>;
  newLanguageFormControl = new FormControl('', [Validators.required]);
  foreignLanguages: Array<string>;

  constructor(private commonService: CommonTaskService, private dialog: MatDialog) { }

  ngOnInit() {
    this.getForeignLanguageList();
  }

  getForeignLanguageList() {
    this.commonService.getForeignLanguages().subscribe((data => {
        this.allForeignLanguages = data;
        this.foreignLanguages = this.allForeignLanguages;
    }));
  }

  addNewInfo() {
    if (this.foreignLanguages != null && this.foreignLanguages.length !== 0) {
      this.isAddingInfo = true;
    } else {
      this.openPopupComponent(this.getNoLanguagesAvailablePopupData());
    }
  }

  cancelAddOperation() {
    this.isAddingInfo = false;
    this.resetNewLanguageOptions();
  }

  private resetNewLanguageOptions() {
    this.languageLevelOptions = getDefaultLanguageLevels();
    this.foreignLanguages = this.allForeignLanguages;
    this.filterForeignLanguages();
  }

  filterForeignLanguages() {
    const addedLanguages = this.foreignInformationList.map(x => x.name);
    this.foreignLanguages = this.foreignLanguages.filter(x => !addedLanguages.includes(x));
  }

  checkAddOperationValidation() {
    this.isNewInfoValid = this.isAddingInfo && !this.newLanguageFormControl.invalid && !this.newLanguageLevelFormControl.invalid;
  }

  saveLanguageInformation() {
    const value = new ForeignLanguageInformation(
      this.count, this.newLanguageFormControl.value, this.newLanguageLevelFormControl.value
    );
    this.foreignInformationList.push(value);
    this.count = this.count + 1;
    this.setTableData();
    this.isAddingInfo = false;
    this.resetNewLanguageOptions();
  }

  private setTableData() {
    this.dataTableSource = new MatTableDataSource(this.foreignInformationList);
  }

  deleteEntry(id) {
    this.foreignInformationList = this.foreignInformationList.filter(x => x.id !== id);
    this.setTableData();
    this.resetNewLanguageOptions();
  }

  onBackPressed() {
    console.log('On Back Pressed - User Contact Information');
  }

  emitForeignLanguageInformation() {
    console.log(this.foreignInformationList);
    this.foreignLanguageEvent.emit(this.foreignInformationList);
  }

  openPopupComponent(popupData: PopupCommonModel) {
    this.openDialog(PopupComponent, popupData);
  }

  private openDialog(component: ComponentType<any>, popupData: PopupCommonModel) {
    const dialogConfig: MatDialogConfig = {
      panelClass: 'dialog-responsive',
      data: popupData
    };

    const dialogRef = this.dialog.open(component, dialogConfig);

    dialogRef.afterClosed().subscribe(
      data => console.log('Dialog output:', data)
    );
  }

  private getNoLanguagesAvailablePopupData() {
    return new PopupCommonModel(
      PopupModelId.default,
      'Uyarı',
      'Şuan ekleyebileceğiniz başka bir dil sistemimizde bulunmamaktadır.',
      '',
      'Tamam'
    );
  }
}
