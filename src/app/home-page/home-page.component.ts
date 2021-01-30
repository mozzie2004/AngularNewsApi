import { Component, OnInit } from '@angular/core';
import { NewsListService } from '../services/news-list.service';
import { StateService } from '../services/state.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  providers: [ NewsListService ],
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(private newsListServives: NewsListService, private state: StateService) { }

  term: string = '';
  data;
  articles;
  filteredArticles;
  length = 100;
  curentPage;

  ngOnInit(): void {
    this.newsListServives.getData()
    .subscribe(
      data =>{ 
        this.data = {...data}
        this.articles = this.data.articles.slice(0, 10);
        this.filteredArticles = this.data.articles;
        this.onTermChange();
      }
    );
    this.term = this.state._state.getValue().term;
  }

  ngOnDestroy() {
    this.state.changeTerm(this.term)
  }

  onTermChange() {
    this.filteredArticles = this.data.articles.filter(item=>item.title.toLowerCase().indexOf(this.term.toLowerCase())>-1);
    this.articles = this.filteredArticles.slice(0, 10);
    this.length = this.filteredArticles.length;
  }

}


