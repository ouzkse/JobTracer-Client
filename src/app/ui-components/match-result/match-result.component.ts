import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import {MatchResultItem} from '../../models/match-result/MatchResultInformation';
import {MatchResultButtonEnum} from '../../models/match-result/MatchResultButtonEnum';
import {MatchResultDataService} from '../../services/data/match-result/match-result.data.service';

@Component({
  selector: 'app-match-result',
  templateUrl: './match-result.component.html',
  styleUrls: ['match-result.component.css']
})
export class MatchResultComponent {

  componentTitle = 'Arama Sonuçları';

  resultList: Array<MatchResultItem> = null;

  @Output() buttonActionEvent = new EventEmitter<MatchResultButtonEnum>();
  matchResultButtonEnum = MatchResultButtonEnum;

  constructor(private matchResultDataService: MatchResultDataService) {
    this.matchResultDataService.matchResultList.subscribe(data => {
      console.log(data);
      this.resultList = data;
      console.log(this.resultList);
    });
  }

  emitButtonAction(value: MatchResultButtonEnum) {
    this.buttonActionEvent.emit(value);
  }
}
