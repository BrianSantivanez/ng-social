import { Component } from '@angular/core';
import { Post } from './post/post.model';
import { PostComponent } from './post/post.component';

@Component({
  selector: 'ngsocial-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent {
  posts: Post[] = [
    {
      value: `test1
      \nLorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur placerat, dui sed malesuada fermentum, purus odio 
      \nfaucibus nisi, ut laoreet nisi tortor ac augue. Pellentesque laoreet arcu non felis ullamcorper aliquet. Integer lobortis 
      \ntincidunt ex. Maecenas pharetra ut felis vehicula accumsan. Quisque tincidunt urna sed vehicula euismod. Nullam id congue.`,
      date: new Date()
    },
    {
      value: 'test2',
      date: new Date()
    },
    {
      value: 'test3',
      date: new Date()
    },
  ];
}
