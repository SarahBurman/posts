import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'posts-post-id-page',
  templateUrl: './post-id-page.component.html',
  styleUrls: ['./post-id-page.component.scss'],
})
export class PostIdPageComponent {
  id!:string | null;
  constructor(private route: ActivatedRoute){
      this.id = this.route.snapshot.paramMap.get('id');
  
  }
}
