
export class GenderCommonModel {
  name: string;
  type: GenderType = GenderType.undefined;

  constructor(name: string, type: GenderType) {
    this.name = name;
    this.type = type;
  }
}

export function getDefaultGenderOptions() {
  return new Array<GenderCommonModel>(
    new GenderCommonModel('Kadın', GenderType.woman),
    new GenderCommonModel('Erkek', GenderType.man),
    new GenderCommonModel('Belirtmek istemiyorum', GenderType.undefined)
  );
}

export enum GenderType {
  woman,
  man,
  undefined
}
