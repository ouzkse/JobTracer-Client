
export class PageModel {
  listId: number;
  page: number;

  constructor(listId: number, page: number) {
    this.listId = listId;
    this.page = page;
  }
}
