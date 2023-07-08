import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeedRoutingModule } from './feed-routing.module';
import { FeedComponent } from './feed.component';
import { PostComponent } from './post/post.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NewCommentFormComponent } from './new-comment-form/new-comment-form.component';


@NgModule({
  declarations: [
    FeedComponent,
    PostComponent,
    PostDetailComponent,
    NewCommentFormComponent,
  ],
  imports: [
    CommonModule,
    FeedRoutingModule,
    ReactiveFormsModule
  ]
})
export class FeedModule { }
