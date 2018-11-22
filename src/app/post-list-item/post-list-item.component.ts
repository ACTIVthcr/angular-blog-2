import { Component, Input, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { Post } from '../models/post.model';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() post: Post;

  constructor(
    public postService: PostService
  ) {
  }

  ngOnInit() {
  }

  increaseLoveIts() {
    this.post.loveIts++;
    this.postService.savePosts()
    this.postService.emitPosts();
  }

  decreaseLoveIts() {
    this.post.loveIts--;
    this.postService.savePosts()
    this.postService.emitPosts();
  }

  deletePost(post: Post) {
    this.postService.deletePost(post);
  }

  getColor() {
    return this.post.loveIts === 0 ? "black" : this.post.loveIts > 0 ? "green" : this.post.loveIts < 0 ? "red" : null;
  }
}
