
export class MatchResultInformation {
  matchResultArray: Array<MatchResultItem>;

  constructor(matchResultArray: Array<MatchResultItem>) {
    this.matchResultArray = matchResultArray;
  }
}

export class MatchResultItem {
  id: number;
  jobTitle: string;
  jobDescription: string;

  constructor(id: number, jobTitle: string, jobDescription: string) {
    this.id = id;
    this.jobTitle = jobTitle;
    this.jobDescription = jobDescription;
  }
}

export function getDummyResultList() {
  const list = [new MatchResultItem(1, 'Title 1', 'Description 1'),
    new MatchResultItem(2, 'Title 2', 'Description 2'),
    new MatchResultItem(3, 'Title 3', 'Description 3'),
    new MatchResultItem(4, 'Title 4', 'Description 4')];

  return new MatchResultInformation(list);
}
