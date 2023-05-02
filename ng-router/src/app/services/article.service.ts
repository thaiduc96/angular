import { Injectable } from '@angular/core';
import {map, Observable, of, shareReplay} from "rxjs";
import {Article} from "../models/article";

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor() { }

  get articles$() {
    return of<Article[]>([
      {title: 'Title 1', body: "test", slug: "title-1"},
      {title: 'Title 2', body: "test 2", slug: "title-2"},
    ]).pipe(shareReplay(1));
  }

  getArticle(slug:string): Observable<Article> {
    // @ts-ignore
    return this.articles$.pipe(map(articles => articles.find(ar => ar.slug === slug)));
  }
}


