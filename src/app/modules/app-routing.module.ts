import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NewsPageComponent} from '../news-page/news-page.component';
import {HomePageComponent} from '../home-page/home-page.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component'

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'page/:id', component: NewsPageComponent },
  {path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
