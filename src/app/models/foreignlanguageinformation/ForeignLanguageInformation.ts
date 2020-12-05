
export class ForeignLanguageInformation {
  name: string;
  level: ForeignLanguageLevel = ForeignLanguageLevel.Beginner;

  constructor(name: string, level: ForeignLanguageLevel) {
    this.name = name;
    this.level = level;
  }
}

enum ForeignLanguageLevel {
  Beginner,
  Intermediate,
  Advanced,
  Native
}
