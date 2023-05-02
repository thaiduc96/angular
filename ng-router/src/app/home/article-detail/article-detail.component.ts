import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ArticleService} from "../../services/article.service";
import {Article} from "../../models/article";
import {filter, Observable, pluck, switchMap} from "rxjs";

@Component({
  selector: 'app-article-detail',
  template: `
    <p>
      article-detail works!
    </p>
    <ng-container *ngIf="article$ | async as article; else noData">
        <h1>{{ article.title}}</h1>
        <p>{{ article.body }}</p>
    </ng-container>
    <ng-template #noData>
        no article found
    </ng-template>
  `,
  styles: [
  ]
})
export class ArticleDetailComponent implements OnInit {
  // @ts-ignore
  article$: Observable<Article>;
  constructor(private readonly route: ActivatedRoute, private readonly articleService: ArticleService){

  }

  ngOnInit(): void {
    this.route.params.subscribe(console.log);
    this.route.paramMap.subscribe(console.log);


    this.article$ = this.route.params.pipe(
      pluck('slug'),
      switchMap(slug => this.articleService.getArticle(slug)),
      filter( article => !!article)
    )
  }
}
