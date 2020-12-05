import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {getDefaultLanguageLevels, LanguageCommonModel} from '../../models/common/LanguageCommonModel';
import {MatTableDataSource} from '@angular/material/table';
import {ForeignLanguageInformation} from '../../models/foreignlanguageinformation/ForeignLanguageInformation';
import {CommonTaskService} from '../../services/tasks/common/common.task.service';

@Component({
  selector: 'app-foreign-language-information',
  templateUrl: './foreignlanguageinformation.component.html',
  styleUrls: ['foreignlanguageinformation.component.css']
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

  private allForeignLanguages: Array<LanguageCommonModel>;
  newLanguageFormControl = new FormControl('', [Validators.required]);
  foreignLanguages: Array<LanguageCommonModel>;

  constructor(private commonService: CommonTaskService) { }

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
    this.isAddingInfo = true;
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
    this.foreignLanguages = this.foreignLanguages.filter(x => !addedLanguages.includes(x.name));
  }

  checkAddOperationValidation() {
    this.isNewInfoValid = this.isAddingInfo && !this.newLanguageFormControl.invalid && !this.newLanguageLevelFormControl.invalid;
  }

  saveLanguageInformation() {
    const value = new ForeignLanguageInformation(
      this.count, this.newLanguageFormControl.value.name, this.newLanguageLevelFormControl.value
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
}