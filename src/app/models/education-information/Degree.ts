
export class Degree {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}

export function getDegrees(): Degree[] {
  return [
    new Degree(1, 'İlköğretim Mezunu'),
    new Degree(2, 'Lise Öğrencisi'),
    new Degree(3, 'Lise Mezunu'),
    new Degree(4, 'Meslek Yüksekokulu Öğrencisi'),
    new Degree(5, 'Meslek Yüksekokulu Mezunu'),
    new Degree(6, 'Üniversite Öğrencisi'),
    new Degree(7, 'Üniversite Mezunu'),
    new Degree(8, 'Master Öğrencisi'),
    new Degree(9, 'Master Mezunu'),
    new Degree(10, 'Doktora Öğrencisi'),
    new Degree(11, 'Doktora Mezunu')

  ];
}
