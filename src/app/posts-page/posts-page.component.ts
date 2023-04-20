import { Component } from '@angular/core';
import { PostsService } from '../posts.service';
import { Post } from '../utils';
import { Observable, map, of } from 'rxjs';
import { Router } from '@angular/router';
import { StateManagingService } from '../state-managing.service';

@Component({
  selector: 'posts-posts-page',
  templateUrl: './posts-page.component.html',
  styleUrls: ['./posts-page.component.scss'],
})
export class PostsPageComponent {

  posts: Observable<Post[]> = new Observable<Post[]>();
  postsExists: Observable<boolean>;
  filter!: string;

  constructor(private postsService:PostsService,  private router: Router , private stateManagingService:StateManagingService){
    this.posts = this.postsService.getPosts();
    if(!this.posts){
      this.postsExists = of(false);
    }
    else {
      this.postsExists = this.posts.pipe(map(posts => posts.length? true : false));
    }

    this.filter = this.stateManagingService.getFilterValue();
  }

  isCardIdExpanded(id: number):boolean{
    const lastId = this.stateManagingService.getExpandedCardId();
    return lastId === id;
  }

  goToPost(id:number){
    this.stateManagingService.setExpandedCardId(id);
    this.stateManagingService.setFilterValue(this.filter);
    this.router.navigate(['/post-id',  id ]);
  }

}
