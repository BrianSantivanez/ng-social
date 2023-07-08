import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute } from '@angular/router';
import { CommentService } from 'src/app/core/services/comment/comment.service';
import { Post } from 'src/app/core/models/post.model';
import { PostComment } from 'src/app/core/models/postComment.model';
import { PostService } from 'src/app/core/services/post/post.service';

@Component({
  selector: 'ngsocial-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {

  postId : string | null = "";
  post: Post | null = null;
  comments: PostComment[]  = [];

  constructor(
    private route: ActivatedRoute, 
    private postService: PostService, 
    private commentService: CommentService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      console.log(params);
      this.postId = params.get("postId")
    })

    this.postService.getPost(this.postId).subscribe({
      next: (response) => {
        this.post = response
        console.log(this.post)
      },
      error: (error) => {
        console.log(error.message)
      }}
    );

    this.commentService.getAllComments().subscribe({
      next: (response) => {
        const allComments: PostComment[] = response
        allComments.forEach(comment => {
          if(comment.post._id == this.postId) {
            this.comments.push(comment)
          }
        });
        console.log(this.comments)
      },
      error: (error) => {
        console.log(error.message)
      }}
    );

  }
}
