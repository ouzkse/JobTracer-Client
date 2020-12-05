import {ForeignLanguageLevel} from '../foreignlanguageinformation/ForeignLanguageInformation';

export class LanguageCommonModel {
  name: string;
  isAllowed = true;

  constructor(name: string) {
    this.name = name;
  }
}

export function getDummyLanguages() {
  return new Array<LanguageCommonModel>(
    new LanguageCommonModel('İngilizce'),
    new LanguageCommonModel('Almanca'),
    new LanguageCommonModel('Fransızca'),
  );
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
