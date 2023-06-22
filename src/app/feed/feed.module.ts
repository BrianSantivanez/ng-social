import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeedRoutingModule } from './feed-routing.module';
import { FeedComponent } from './feed.component';
import { PostComponent } from './post/post.component';
import { PostDetailComponent } from './post-detail/post-detail.component';


@NgModule({
  declarations: [
    FeedComponent,
    PostComponent,
    PostDetailComponent,
  ],
  imports: [
    CommonModule,
    FeedRoutingModule,
  ]
})
export class FeedModule { }
