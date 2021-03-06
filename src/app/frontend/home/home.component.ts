import {Component, ViewEncapsulation} from '@angular/core';
import {PostsService} from "../../shared/services/posts.service";

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'home',
  providers: [PostsService],
  styleUrls:[ './home.style.scss' ],
  templateUrl: './home.template.pug'
})
export class Home {
  // Set our default values
  date: Date = new Date();
  localState = { value: '' };
  // TypeScript public modifiers
  constructor() {}
}
