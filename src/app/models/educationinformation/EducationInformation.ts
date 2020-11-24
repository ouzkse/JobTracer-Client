
export class EducationInformation {
  id: number;
  type: string;
  university: string;
  faculty: string;
  department: string;
  startDate: Date;
  finishDate: Date;

  constructor(id: number, type: string, university: string, faculty: string, department: string, startDate: Date, finishDate: Date) {
    this.id = id;
    this.type = type;
    this.university = university;
    this.faculty = faculty;
    this.department = department;
    this.startDate = startDate;
    this.finishDate = finishDate;
  }
}
