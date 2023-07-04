import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from './models/post.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>("http://localhost:3000/post");
  }

  getPost(id: string | null): Observable<Post> {
    return this.http.get<Post>(`http://localhost:3000/post/${id}`);
  }
}
