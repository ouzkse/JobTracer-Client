import {Component, Inject} from '@angular/core';
import {EducationDetailModel} from '../../models/educationinforamation/EducationDetailModel';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FormControl} from '@angular/forms';
import {EducationInformation} from '../../models/educationinforamation/EducationInformation';

@Component({
  selector: 'app-education-detail',
  templateUrl: './educationdetail.component.html',
  styleUrls: ['./educationdetail.component.css']
})
export class EducationDetailComponent {

  componentData: EducationDetailModel;

  startDateControl = new FormControl(new Date());
  finishDateControl = new FormControl(new Date());

  // sadece yıl seçilecek şekilde güncelle.
  dateOfToday = new Date();
  minDate = new Date(this.dateOfToday.getFullYear(), this.dateOfToday.getMonth(), this.dateOfToday.getDate());

  itemId: number;
  selectedDegree: string;
  selectedUniversity: string;
  selectedFaculty: string;
  selectedDepartment: string;
  startDate: string;
  finishDate: string;

  constructor(
    private dialogReference: MatDialogRef<EducationDetailComponent>,
    @Inject(MAT_DIALOG_DATA) dialogData
  ) {
    this.componentData = dialogData.model;
    this.itemId = dialogData.id;
  }

  selectDegree(degree) {
    this.selectedDegree = degree;
  }

  selectFaculty(faculty) {
    this.selectedFaculty = faculty;
  }

  selectUniversity(university) {
    this.selectedUniversity = university;
  }

  selectDepartment(department) {
    this.selectedDepartment = department;
  }

  checkValidations() {
    return !this.startDateControl.invalid &&
      !this.finishDateControl.invalid &&
      this.selectedDegree != null &&
      this.selectedUniversity != null &&
      this.selectedFaculty != null &&
      this.selectedDepartment != null;
  }

  cancelOperation() {
    this.dialogReference.close(null);
  }

  emitEducationInformation() {
    const educationInformation = new EducationInformation(
      this.itemId,
      this.selectedDegree,
      this.selectedUniversity,
      this.selectedFaculty,
      this.selectedDepartment,
      new Date(this.startDate),
      new Date(this.finishDate)
    );

    this.dialogReference.close(educationInformation);
  }
}
