import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsListService } from '../services/news-list.service';

@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  providers: [ NewsListService ],
  styleUrls: ['./news-page.component.scss']
})
export class NewsPageComponent implements OnInit {

  constructor(private route: ActivatedRoute, private newsListServives: NewsListService) { }
  data;
  id: string;
  curentNews;

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.newsListServives.getData()
    .subscribe(
      data =>{ 
        this.data = {...data}
        this.curentNews = this.data.articles.find(item=>item.title.replace('/', '') === this.id)
      }
    );
    
  }

}
