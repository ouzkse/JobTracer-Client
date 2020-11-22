
export class EducationDetailModel {
  degreeArray: Array<string>;
  universityArray: Array<string>;
  departmentArray: Array<string>;
  facultyArray: Array<string>;

  constructor(degreeArray: Array<string>, universityArray: Array<string>, departmentArray: Array<string>, facultyArray: Array<string>) {
    this.degreeArray = degreeArray;
    this.universityArray = universityArray;
    this.departmentArray = departmentArray;
    this.facultyArray = facultyArray;
  }
}
