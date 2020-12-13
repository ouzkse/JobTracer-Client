import {ForeignLanguageInformation} from './ForeignLanguageInformation';

export class UserForeignLanguageInformation {

  foreignLanguageInformation: Array<ForeignLanguageInformation>;

  constructor(foreignLanguageInformation: Array<ForeignLanguageInformation>) {
    this.foreignLanguageInformation = foreignLanguageInformation;
  }
}
