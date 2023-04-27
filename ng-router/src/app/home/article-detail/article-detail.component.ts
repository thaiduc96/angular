import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-article-detail',
  template: `
    <p>
      article-detail works!
    </p>
  `,
  styles: [
  ]
})
export class ArticleDetailComponent implements OnInit {
  constructor(private readonly route: ActiveRoute){

  }

  ngOnInit(): void {
    this.route.params.subscribe(console.log);
  }
}
