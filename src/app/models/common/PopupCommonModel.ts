
export class PopupCommonModel {

  title: string;
  description: string;
  leftButtonText: string;
  rightButtonText: string;

  constructor(title: string, description: string, leftButtonText: string, rightButtonText: string) {
    this.title = title;
    this.description = description;
    this.leftButtonText = leftButtonText;
    this.rightButtonText = rightButtonText;
  }
}
