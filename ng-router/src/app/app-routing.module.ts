import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ChildHomeComponent} from "./home/child-home/child-home.component";
import {ArticleDetailComponent} from "./home/article-detail/article-detail.component";

const routes: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'detail/:slug', component: ArticleDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
