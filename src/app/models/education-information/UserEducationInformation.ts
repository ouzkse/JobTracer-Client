import {University} from './University';
import {Faculty} from './Faculty';
import {Department} from './Department';

export class UserEducationInformation {

  degree: string;
  graduationYear: string;
  university: University;
  faculty: Faculty;
  department: Department;

  constructor(degree: string, graduationYear: string, university: University, faculty: Faculty, department: Department) {
    this.degree = degree;
    this.graduationYear = graduationYear;
    this.university = university;
    this.faculty = faculty;
    this.department = department;
  }
}
