
export class UserWorkExperience {
  profession: string;
  totalExperience: number;
  experiences: string[];

  constructor(profession: string, experiences: string[], totalExperience: number) {
    this.profession = profession;
    this.experiences = experiences;
    this.totalExperience = totalExperience;
  }
}
