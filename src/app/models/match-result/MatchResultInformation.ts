
export class MatchResultInformation {
  matchResultArray: Array<MatchResultItem>;

  constructor(matchResultArray: Array<MatchResultItem>) {
    this.matchResultArray = matchResultArray;
  }
}

export class MatchResultItem {
  id: string;
  experience: number;
  maxExperience: number;
  position: string;
  cities: Array<string>;
  educationStatus: number;
  clusters: string;
  text: string;
  htmlText: string;

  constructor(
    id: string,
    experience: number,
    maxExperience: number,
    position: string,
    cities: Array<string>,
    educationStatus: number,
    clusters: string,
    text: string,
    htmlText: string,
  ) {
    this.id = id;
    this.experience = experience;
    this.maxExperience = maxExperience;
    this.position = position;
    this.cities = cities;
    this.educationStatus = educationStatus;
    this.clusters = clusters;
    this.text = text;
    this.htmlText = htmlText;
  }

  getCitiesStr(): string {
    return this.cities.toString();
  }
}

