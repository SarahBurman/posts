import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PostsPageComponent } from './posts-page/posts-page.component';



@NgModule({
imports: [RouterModule.forRoot([
    { path: '', pathMatch: 'full', component:PostsPageComponent }
  ])]
})
export class RoutingModule {}
