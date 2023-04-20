import { Pipe, PipeTransform } from '@angular/core';
import { Post } from '../utils';

@Pipe({
  name: 'filterByTitle',
})

export class FilterPipe implements PipeTransform {
  transform(posts: Post[] | null, filterBy: string): Post[] {
    if(!posts){
      return [];
    }
    if (!filterBy || filterBy.length === 0) {
      return posts;
    }

    if (posts.length === 0) {
      return posts;
    }

    return posts.filter((post: Post) => {
      const nameFound =
        post.title.toLowerCase().includes(filterBy.toLowerCase());
      if (nameFound) {
        return post;
      }
      return null;
    });
  }
}

