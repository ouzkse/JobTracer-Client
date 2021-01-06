import {MatchingPriority} from '../models/user-information/MatchingPriority';

export class GlobalVariables {

  static matchingPriority: string = MatchingPriority.MEDIUM;

  static setMatchingPriority(value: string) {
    this.matchingPriority = value;
  }
}
