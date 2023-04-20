import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PostsPageComponent } from './posts-page/posts-page.component';
import { PostIdPageComponent } from './post-id-page/post-id-page.component';



@NgModule({
imports: [RouterModule.forRoot([
    { path: '', component: PostsPageComponent },
    { path: 'post-id/:id', pathMatch: 'full', component:PostIdPageComponent }
  ])],
exports: [RouterModule]
})
export class RoutingModule {}
