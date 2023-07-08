import { Component, OnInit } from '@angular/core';
import { Post } from '../core/models/post.model';
import { PostService } from '../core/post.service';
import { UserStateService } from '../core/services/state/user-state.service';


@Component({
  selector: 'ngsocial-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit{

  constructor(
    private postService: PostService,
    private userState: UserStateService  
  ){}

  posts: Post[] = [];

  ngOnInit(): void {

    this.userState.userId$?.subscribe(console.log)

    this.postService.getPosts().subscribe({
      next: (response) => {
        this.posts = response
      },
      error: (error) => {
        console.log(error.message)
      }}
    );
  }
}
