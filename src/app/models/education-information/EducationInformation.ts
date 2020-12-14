
export class EducationInformation {
  id: number;
  type: string;
  university: string;
  faculty: string;
  department: string;
  graduationYear: string;

  constructor(id: number, type: string, university: string, faculty: string, department: string, graduationYear: string) {
    this.id = id;
    this.type = type;
    this.university = university;
    this.faculty = faculty;
    this.department = department;
    this.graduationYear = graduationYear;
  }
}
