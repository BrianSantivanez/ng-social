import { Component, OnInit, ViewChild } from '@angular/core';
import { Post } from '../core/models/post.model';
import { PostService } from '../core/services/post/post.service';
import { UserStateService } from '../core/services/state/user-state.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'ngsocial-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit{

  @ViewChild("text") textInput: any;

  newPostForm = new FormGroup({
    text: new FormControl("",[Validators.required]),
  })

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
  

  addPost(): void {
    if (this.newPostForm.invalid){
      return;
    }

    const postText = this.newPostForm.value.text
    this.postService.savePost(postText)?.subscribe({
      error: (err) => {
        console.log(err)
      },
      complete: () => {
        this.textInput.nativeElement.value = "";
        this.postService.getPosts().subscribe({
          next: (response) => {
            this.posts = response
          },
          error: (error) => {
            console.log(error.message)
          }}
        );
      }
    });
  }
}
