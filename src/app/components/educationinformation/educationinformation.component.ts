import {Component} from '@angular/core';
import {EducationInformation} from '../../models/educationinforamation/EducationInformation';
import {FormControl} from '@angular/forms';
import {EducationDetailModel} from '../../models/educationinforamation/EducationDetailModel';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {EducationDetailComponent} from '../educationdetail/educationdetail.component';

@Component({
  selector: 'app-education-component',
  templateUrl: './educationinformation.component.html',
  styleUrls: ['educationinformation.component.css']
})
export class EducationInformationComponent {

  componentTitle = 'Eğitim Bilgileri';
  isAddingInfo = false;
  count = 0;

  // Dummy datas
  educationInformationArray: Array<EducationInformation> = Array();

  degreeArray: Array<string> = ['Doktora', 'Yüksek Lisans', 'Lisans', 'Ön Lisans'];
  universityArray: Array<string> = ['Dokuz Eylül Üniversitesi', 'Ege Üniversitesi', 'İzmir Ekonomi Üniversitesi', 'Yıldız Teknik Üniversitesi'];
  departmentArray: Array<string> = ['Bilgisayar Mühendisliği', 'Elektrik-Elektronik Mühendisliği', 'İşletme'];
  facultyArray: Array<string> = ['Mühendislik Fakültesi', 'Mimarlık Fakültesi', 'İşletme Fakültesi'];

  dummyAddModel: EducationDetailModel = new EducationDetailModel(
    this.degreeArray,
    this.universityArray,
    this.departmentArray,
    this.facultyArray
  );

  constructor(private dialog: MatDialog) { }

  onDeleteEvent(id) {
    this.educationInformationArray = this.educationInformationArray.filter(item => item.id !== id);
  }

  addNewInfo() {
    this.isAddingInfo = true;
    this.openDialog();
  }

  private openDialog() {
    const dialogConfig: MatDialogConfig = {
      panelClass: 'dialog-responsive',
      hasBackdrop: true,
      disableClose: true,
      data: { model: this.dummyAddModel, id: this.count }
    };

    const dialogRef = this.dialog.open(EducationDetailComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      data => {
        console.log('Dialog output:', data);
        this.isAddingInfo = false;
        if (data != null) {
          this.educationInformationArray.push(data);
          this.count = this.count + 1;
        }
      }
    );
  }
}
