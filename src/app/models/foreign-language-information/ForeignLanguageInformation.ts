import {LanguageLevelCommonModel} from '../common/LanguageLevelCommonModel';

export class ForeignLanguageInformation {
  id: number;
  name: string;
  level: LanguageLevelCommonModel;

  constructor(id: number, name: string, level: LanguageLevelCommonModel) {
    this.id = id;
    this.name = name;
    this.level = level;
  }
}

export enum ForeignLanguageLevel {
  Beginner,
  Intermediate,
  Advanced,
  Native
}
