import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from './utils';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private httpClient: HttpClient) { }

  getPosts(): Observable<Post[]>{
    const posts = this.httpClient.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
    console.log(posts);
    
    return posts;
  }

}
