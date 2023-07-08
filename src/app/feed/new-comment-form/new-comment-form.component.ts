import { Component, Input, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CommentService } from 'src/app/core/services/comment/comment.service';

@Component({
  selector: 'ngsocial-new-comment-form',
  templateUrl: './new-comment-form.component.html',
  styleUrls: ['./new-comment-form.component.scss']
})
export class NewCommentFormComponent {
  
  @Input() postId : string | null = "";

  @ViewChild("text") textInput: any;

  newCommentForm = new FormGroup({
    text: new FormControl("",[Validators.required]),
  })

  constructor (private commentService: CommentService){}
  
  addcomment(): void {
    if (this.newCommentForm.invalid){
      return;
    }

    const commentText = this.newCommentForm.value.text
    this.commentService.saveComment(commentText, this.postId)?.subscribe({
      error: (err) => {
        console.log(err)
      },
      complete: () => {
        this.textInput.nativeElement.value = "";
        window.location.reload();
      }
    });
  }

}
