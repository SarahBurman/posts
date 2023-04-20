import { Component } from '@angular/core';
import { PostsService } from '../posts.service';
import { Post } from '../utils';
import { Observable, map, of } from 'rxjs';

@Component({
  selector: 'posts-posts-page',
  templateUrl: './posts-page.component.html',
  styleUrls: ['./posts-page.component.scss'],
})
export class PostsPageComponent {

  posts: Observable<Post[]>;
  postsExists: Observable<boolean>;

  constructor(private postsService:PostsService){
    this.posts = this.postsService.getPosts();
    if(!this.posts){
      this.postsExists = of(false);
    }
    else {
      this.postsExists = this.posts.pipe(map(posts => posts.length? true : false));
    }
  }

}
