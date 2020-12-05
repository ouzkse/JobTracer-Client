
export class CommonGenderModel {
  name: string;
  type: GenderType = GenderType.undefined;

  constructor(name: string, type: GenderType) {
    this.name = name;
    this.type = type;
  }
}

export function getDefaultGenderOptions() {
  return new Array<CommonGenderModel>(
    new CommonGenderModel('Kadın', GenderType.woman),
    new CommonGenderModel('Erkek', GenderType.man),
    new CommonGenderModel('Belirtmek istemiyorum', GenderType.undefined)
  );
}

export enum GenderType {
  woman,
  man,
  undefined
}
