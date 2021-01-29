import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MatchResultItem} from '../../models/match-result/MatchResultInformation';
import {MatchResultButtonEnum} from '../../models/match-result/MatchResultButtonEnum';
import {MatchResultDataService} from '../../services/data/match-result/match-result.data.service';
import {PageEvent} from '@angular/material/paginator';
import {CommonTaskService} from '../../services/tasks/common/common.task.service';
import {PageModel} from '../../models/match-result/PageModel';
import {
  getNumberValueOfMatchingPriority,
  getPriorityList,
  getStringValueOfMatchingPriority, getValueOfMatchingPriority
} from '../../models/user-information/MatchingPriority';
import {KeyValuePair} from '../../models/common/KeyValuePair';
import {GlobalVariables} from '../../helpers/GlobalVariables';

@Component({
  selector: 'app-match-result',
  templateUrl: './match-result.component.html',
  styleUrls: ['match-result.component.css']
})
export class MatchResultComponent implements OnInit{

  componentTitle = 'Eşleşme Sonuçları';

  priorityList = getPriorityList();
  selectedPriority: KeyValuePair;

  resultList: Array<MatchResultItem> = null;
  totalPage: number;
  pageId: number;
  pageIndex = 0;

  @Output() buttonActionEvent = new EventEmitter<MatchResultButtonEnum>();
  matchResultButtonEnum = MatchResultButtonEnum;

  constructor(private matchResultDataService: MatchResultDataService, private commonService: CommonTaskService) {}

  ngOnInit(): void {
    this.matchResultDataService.matchResultList.subscribe(data => {
      console.log(data);
      this.resultList = data.jobs;
      this.totalPage = data.totalPages;
      this.pageId = data.listId;
      this.pageIndex = 0;
      console.log(this.resultList);
    });

    this.getInitialPriority();
  }

  private getInitialPriority() {
    const globalPriority = GlobalVariables.matchingPriority;
    this.selectedPriority = {
      key: getNumberValueOfMatchingPriority(globalPriority), value: getStringValueOfMatchingPriority(globalPriority)
    };
  }

  getCitiesForHeader(resultItem: MatchResultItem): string {
    return resultItem.cities.slice(0, 3).toString();
  }

  getCitiesForDescription(item: MatchResultItem): string {
    if (item.cities.length > 3) {
      return item.cities.slice(3, item.cities.length).toString();
    } else {
      return undefined;
    }
  }

  emitButtonAction(value: MatchResultButtonEnum) {
    this.buttonActionEvent.emit(value);
  }

  onPageChanged(event: PageEvent) {
    console.log(event);
    this.pageIndex = event.pageIndex;
    this.commonService.getResultPageData(new PageModel(this.pageId, event.pageIndex, null)).subscribe(result => {
      this.resultList = result.jobs;
    });
  }

  setMatchingPriority(value: KeyValuePair) {
    this.commonService.getResultPageData(new PageModel(this.pageId, 0, getValueOfMatchingPriority(value.toString())))
      .subscribe(result => {
        this.resultList = result.jobs;
        this.totalPage = result.totalPages;
        this.pageId = result.listId;
        this.pageIndex = 0;
    });
  }
}
