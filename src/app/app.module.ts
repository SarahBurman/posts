import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatExpansionModule } from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { PostsPageComponent } from './posts-page/posts-page.component';
import { RoutingModule } from './routing.modules';
import { PostIdPageComponent } from './post-id-page/post-id-page.component';

@NgModule({
  declarations: [AppComponent, PostsPageComponent, PostIdPageComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    RoutingModule,
    MatExpansionModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
