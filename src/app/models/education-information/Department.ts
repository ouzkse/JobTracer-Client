
export class Department {
  id: string;
  facId: string;
  name: string;

  constructor(id: string, facId: string, name: string) {
    this.id = id;
    this.facId = facId;
    this.name = name;
  }
}
