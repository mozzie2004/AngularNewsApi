import { Component, Input, Output, EventEmitter } from '@angular/core';
import { PageEvent } from '@angular/material/paginator/';
import { StateService } from '../services/state.service';


@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})

export class NewsListComponent {

  constructor( private stateService: StateService) {}
  data
  pageSize = 10;
  pageEvent: PageEvent;

  

  
  @Input() articles;
  @Input() filteredArticles;
  @Input() length;

  onPageChange($event) {
    let startIndex: number;
    let endIndex: number;
    let curentPage: number = $event.pageIndex+1;
    endIndex = curentPage * 10;
    startIndex = endIndex -10;
    this.articles = this.filteredArticles.slice(startIndex, endIndex);
  }

  


}
