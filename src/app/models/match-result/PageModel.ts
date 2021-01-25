
export class PageModel {
  listId: number;
  page: number;
  matchingPriority: string;

  constructor(listId: number, page: number, matchingPriority: string) {
    this.listId = listId;
    this.page = page;
    this.matchingPriority = matchingPriority;
  }
}
