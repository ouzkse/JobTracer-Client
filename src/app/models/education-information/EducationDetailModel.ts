
// TODO(OUZ) Remove this class
export class EducationDetailModel {
  educationdegrees: Array<string>;
  universities: Array<string>;
  departments: Array<string>;
  faculties: Array<string>;

  constructor(degreeArray: Array<string>, universityArray: Array<string>, departmentArray: Array<string>, facultyArray: Array<string>) {
    this.educationdegrees = degreeArray;
    this.universities = universityArray;
    this.departments = departmentArray;
    this.faculties = facultyArray;
  }
}
