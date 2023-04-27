import {Component, OnInit} from '@angular/core';
import {Observable, of} from "rxjs";
import {Article} from "../models/article";
import {ArticleService} from "../services/article.service";

@Component({
  selector: 'app-home',
  template: `
      <p>
          home works!
      </p>
      <ul>
          <li *ngFor="let article of articles$ | async" style="border: 1px solid black; padding: 20px;">
              {{ article.title }}
              <br>
              {{ article.body }}
              <a href="#"> readmo</a>
          </li>
      </ul>
  `,
  styles: []
})
export class HomeComponent implements OnInit {

  articles$: Observable<Article[]> | undefined;
  constructor(private readonly articleService: ArticleService) {

  }

  ngOnInit(): void {
    this.articles$ = this.articleService.articles$;
  }

}
