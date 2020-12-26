
export class MatchResultInformation {
  matchResultArray: Array<MatchResultItem>;

  constructor(matchResultArray: Array<MatchResultItem>) {
    this.matchResultArray = matchResultArray;
  }
}

export class MatchResultItem {
  id: string;
  position: string;
  experience: number;
  maxExperience: number;
  cities: string[];
  educationStatus: number;
  text: string;
  htmlText: string;


  constructor(
    id: string,
    position: string,
    experience: number,
    maxExperience: number,
    cities: string[],
    educationStatus: number,
    text: string,
    htmlText: string
  ) {
    this.id = id;
    this.position = position;
    this.experience = experience;
    this.maxExperience = maxExperience;
    this.cities = cities;
    this.educationStatus = educationStatus;
    this.text = text;
    this.htmlText = htmlText;
  }
}

