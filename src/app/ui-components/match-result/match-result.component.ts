import {Component, Input} from '@angular/core';
import {MatchResultItem} from '../../models/match-result/MatchResultInformation';

@Component({
  selector: 'app-match-result',
  templateUrl: './match-result.component.html',
  styleUrls: ['match-result.component.css']
})
export class MatchResultComponent {

  componentTitle = 'Arama Sonuçları';

  @Input() resultList: Array<MatchResultItem>;

}
