import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NewsListComponent} from '../news-list/news-list.component';
import {NewsPageComponent} from '../news-page/news-page.component';
import {AppComponent} from '../app.component';

const routes: Routes = [
  {path: 'news', component: NewsListComponent},
  {path: 'page', component: NewsPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
