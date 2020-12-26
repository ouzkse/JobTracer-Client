
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
    new Degree(0, 'İlk Okul'),
    new Degree(1, 'Orta Okul'),
    new Degree(2, 'Lise'),
    new Degree(3, 'Ön Lisans'),
    new Degree(4, 'Lisans'),
    new Degree(5, 'Yüksek Lisans'),
    new Degree(6, 'Doktora')
  ];
}
