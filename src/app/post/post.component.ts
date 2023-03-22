import { Component, Input, OnInit } from '@angular/core';
import { Guid } from 'guid-typescript';
import { Post } from 'src/models/post.model';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
  @Input() posts!: Post[];
  @Input() searchText: string = '';
  @Input() onSelect!: (post: Post) => void;
  @Input() onDelete!: (id: Guid) => void;
  @Input() deleteSelectedPosts!: () => void;
}
