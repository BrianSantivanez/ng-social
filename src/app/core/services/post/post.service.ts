import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../../models/post.model';
import { Observable, switchMap } from 'rxjs';
import { UserStateService } from '../state/user-state.service';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(
    private http: HttpClient,
    private userState: UserStateService,
  ) { }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>("http://localhost:3000/post");
  }

  getPost(id: string | null): Observable<Post> {
    return this.http.get<Post>(`http://localhost:3000/post/${id}`);
  }

  savePost(text: string | null | undefined): Observable<Post> | undefined {
    let authorId = ""
    this.userState.userId$?.subscribe((userId) =>
      authorId = userId
    );
    console.log({
      text,
      author: authorId,
    })
    return this.http.post<Post>(
      'http://localhost:3000/post', 
      {
        text,
        author: authorId,
      }
    )
  }
}
