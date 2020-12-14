import {Component, Input, Output, EventEmitter} from '@angular/core';
import {MatchResultItem} from '../../models/match-result/MatchResultInformation';
import {MatchResultButtonEnum} from '../../models/match-result/MatchResultButtonEnum';

@Component({
  selector: 'app-match-result',
  templateUrl: './match-result.component.html',
  styleUrls: ['match-result.component.css']
})
export class MatchResultComponent {

  componentTitle = 'Arama Sonuçları';

  @Input() resultList: Array<MatchResultItem>;
  @Output() buttonActionEvent = new EventEmitter<MatchResultButtonEnum>();
  matchResultButtonEnum = MatchResultButtonEnum;

  emitButtonAction(value: MatchResultButtonEnum) {
    this.buttonActionEvent.emit(value);
  }
}
