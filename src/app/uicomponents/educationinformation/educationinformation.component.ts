import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {EducationInformation} from '../../models/educationinformation/EducationInformation';
import {EducationDetailModel} from '../../models/educationinformation/EducationDetailModel';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {EducationDetailComponent} from '../educationdetail/educationdetail.component';
import {EducationInformationDataService} from '../../services/data/education-information/education-information.data.service';
import {CommonTaskService} from '../../services/tasks/common/common.task.service';
import {UserEducationInformation} from '../../models/educationinformation/UserEducationInformation';

@Component({
  selector: 'app-education-component',
  templateUrl: './educationinformation.component.html',
  styleUrls: ['educationinformation.component.css']
})
export class EducationInformationComponent implements OnInit {

  componentTitle = 'Eğitim Bilgileri';
  isAddingInfo = false;
  count = 0;

  @Output() educationInformationEvent = new EventEmitter<UserEducationInformation>();
  educationInformationArray: Array<EducationInformation> = new Array<EducationInformation>();

  // Dummy datas
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

  constructor(private dialog: MatDialog, private dataService: EducationInformationDataService, private commonService: CommonTaskService) { }

  ngOnInit() {
    this.getEducationInformation();
  }

  private getEducationInformation() {
    this.commonService.getEducationInformation().subscribe((data => this.dummyAddModel = data));
  }

  onDeleteEvent(id) {
    this.educationInformationArray = this.educationInformationArray.filter(item => item.id !== id);
    this.dataService.setUserEducationInformation(this.educationInformationArray);
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
          this.dataService.setUserEducationInformation(this.educationInformationArray);
          this.count = this.count + 1;
        }
      }
    );
  }

  emitUserEducationInformation() {
    console.log(this.educationInformationArray);
    const value = new UserEducationInformation(this.educationInformationArray);
    this.educationInformationEvent.emit(value);
  }
}
