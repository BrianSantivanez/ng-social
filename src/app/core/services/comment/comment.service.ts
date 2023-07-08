import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PostComment } from '../../models/postComment.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient) { }

  getAllComments(): Observable<PostComment[]> {
    return this.http.get<PostComment[]>("http://localhost:3000/comment");
  }
}
