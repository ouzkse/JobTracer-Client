
export class PopupCommonModel {

  id: number;
  title: string;
  description: string;
  leftButtonText: string;
  rightButtonText: string;

  constructor(id: number, title: string, description: string, leftButtonText: string, rightButtonText: string) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.leftButtonText = leftButtonText;
    this.rightButtonText = rightButtonText;
  }
}
