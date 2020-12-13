import {ForeignLanguageLevel} from '../foreign-language-information/ForeignLanguageInformation';

export class LanguageCommonModel {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

export class LanguageLevelCommonModel {
  levelName: string;
  levelType: ForeignLanguageLevel;

  constructor(levelName: string, levelType: ForeignLanguageLevel) {
    this.levelName = levelName;
    this.levelType = levelType;
  }
}

export function getDefaultLanguageLevels() {
  return new Array<LanguageLevelCommonModel>(
    new LanguageLevelCommonModel('Başlangıç Düzeyi Yetkinlik', ForeignLanguageLevel.Beginner),
    new LanguageLevelCommonModel('Orta Düzey Yetkinlik', ForeignLanguageLevel.Intermediate),
    new LanguageLevelCommonModel('İleri Düzey Yetkinlik', ForeignLanguageLevel.Advanced),
    new LanguageLevelCommonModel('Ana Dil Yetkinliği', ForeignLanguageLevel.Native),
  );
}
