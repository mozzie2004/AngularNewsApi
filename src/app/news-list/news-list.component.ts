import { Component, OnInit, Input, DoCheck } from '@angular/core';
import { PageEvent } from '@angular/material/paginator/';
import { StateService } from '../services/state.service';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})

export class NewsListComponent implements OnInit {

  constructor( private stateService: StateService) {}
  data
  pageSize = 10;
  pageEvent: PageEvent;
  term
  arr

  

  
  @Input() articles;
  @Input() filteredArticles;
  @Input() length;


  ngOnInit(): void {
  this.arr =this.stateService.state.pipe(map(state => state.data.articles))

  
  }
  

  onPageChange($event) {
    // console.log(this.stateService._state.getValue())
    let startIndex: number;
    let endIndex: number;
    let curentPage: number = $event.pageIndex+1;
    endIndex = curentPage * 10;
    startIndex = endIndex -10;

    this.articles = this.filteredArticles.slice(startIndex, endIndex);
  }

  


}
