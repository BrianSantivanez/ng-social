import { Component } from '@angular/core';
import { Post } from './post/post.model';

@Component({
  selector: 'ngsocial-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent {
  posts: Post[] = [
    {
      id: "1",
      value: `test1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur placerat, dui sed malesuada fermentum, purus odio faucibus nisi, ut laoreet nisi tortor ac augue. Pellentesque laoreet arcu non felis ullamcorper aliquet. Integer lobortis tincidunt ex. Maecenas pharetra ut felis vehicula accumsan. Quisque tincidunt urna sed vehicula euismod. Nullam id congue.`,
      date: new Date()
    },
    {
      id: "2",
      value: `test2
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sem ex, ultrices quis euismod eget, dictum vitae nisl. Suspendisse congue diam eu aliquam convallis. Nulla mollis arcu vel lorem efficitur, nec euismod nulla cursus. Donec tincidunt elit ac elit hendrerit maximus. Proin pretium, risus ac fermentum placerat, ante nulla placerat ipsum, eu iaculis nisl diam quis nisi. Sed vulputate metus finibus justo cursus bibendum ut porttitor felis. Mauris justo massa, facilisis ut hendrerit non, euismod venenatis ipsum. Integer vel massa.`,
      date: new Date()
    },
    {
      id: "3",
      value: 'test3',
      date: new Date()
    },
  ];
}
