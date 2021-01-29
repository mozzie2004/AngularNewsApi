import { Component, OnInit } from '@angular/core';
import { NewsListService } from './services/news-list.service';
import { StateService } from './services/state.service';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [ NewsListService ],
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private newsListServives: NewsListService, private state: StateService) { }
  term: string = '';
  data;
  articles;
  filteredArticles;
  length = 100;

  ngOnInit(): void {
    this.newsListServives.getData()
    .subscribe(
      data =>{ 
        this.data = {...data}
        this.articles = this.data.articles.slice(0, 10);
        this.filteredArticles = this.data.articles;
        this.state.changeData({...data});
        

      }
    );
  }

  onTermChange() {
    this.filteredArticles = this.data.articles.filter(item=>item.title.toLowerCase().indexOf(this.term.toLowerCase())>-1);
    this.articles = this.filteredArticles.slice(0, 10);
    this.length = this.filteredArticles.length;
    
  }
}
