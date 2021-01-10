import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MatchResultItem} from '../../models/match-result/MatchResultInformation';
import {MatchResultButtonEnum} from '../../models/match-result/MatchResultButtonEnum';
import {MatchResultDataService} from '../../services/data/match-result/match-result.data.service';
import {PageEvent} from '@angular/material/paginator';
import {CommonTaskService} from '../../services/tasks/common/common.task.service';
import {PageModel} from '../../models/match-result/PageModel';

@Component({
  selector: 'app-match-result',
  templateUrl: './match-result.component.html',
  styleUrls: ['match-result.component.css']
})
export class MatchResultComponent implements OnInit{

  componentTitle = 'Arama Sonuçları';

  resultList: Array<MatchResultItem> = null;
  totalPage: number;
  pageId: number;

  @Output() buttonActionEvent = new EventEmitter<MatchResultButtonEnum>();
  matchResultButtonEnum = MatchResultButtonEnum;

  constructor(private matchResultDataService: MatchResultDataService, private commonService: CommonTaskService) {}

  ngOnInit(): void {
    this.matchResultDataService.matchResultList.subscribe(data => {
      console.log(data);
      this.resultList = data.jobs;
      this.totalPage = data.totalPages;
      this.pageId = data.listId;
      console.log(this.resultList);
    });
  }

  getResultItemCities(resultItem: MatchResultItem): string {
    return resultItem.cities.toString();
  }

  emitButtonAction(value: MatchResultButtonEnum) {
    this.buttonActionEvent.emit(value);
  }

  onPageChanged(event: PageEvent) {
    console.log(event);
    this.commonService.getResultPageData(new PageModel(this.pageId, event.pageIndex)).subscribe(result => {
      this.resultList = result.jobs;
    });
  }
}
