import {Component, Input} from '@angular/core';
import {MatchResultItem} from '../../models/matchresult/MatchResultInformation';

@Component({
  selector: 'app-match-result',
  templateUrl: './matchresult.component.html',
  styleUrls: ['matchresult.component.css']
})
export class MatchResultComponent {

  componentTitle = 'Arama Sonuçları';

  @Input() resultList: Array<MatchResultItem>;

}
