import { Component } from '@angular/core';
import { Post } from 'src/models/post.model';
import { Guid } from 'guid-typescript';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  posts: Post[] = [
    {
      id: Guid.create(),
      title: 'Post 1',
      body: 'Post 1 text',
      selected: false,
    },
    {
      id: Guid.create(),
      title: 'Post 2',
      body: 'Post 2 text',
      selected: false,
    },
    {
      id: Guid.create(),
      title: 'Post 3',
      body: 'Post 3 text',
      selected: false,
    },
    {
      id: Guid.create(),
      title: 'Post 4',
      body: 'Post 4 text',
      selected: false,
    },
    {
      id: Guid.create(),
      title: 'Post 5',
      body: 'Post 5 text',
      selected: false,
    },
    {
      id: Guid.create(),
      title: 'Post 6',
      body: 'Post 6 text',
      selected: false,
    },
    {
      id: Guid.create(),
      title: 'Post 7',
      body: 'Post 7 text',
      selected: false,
    },
    {
      id: Guid.create(),
      title: 'Post 8',
      body: 'Post 8 text',
      selected: false,
    },
    {
      id: Guid.create(),
      title: 'Post 9',
      body: 'Post 9 text',
      selected: false,
    },
    {
      id: Guid.create(),
      title: 'Post 10',
      body: 'Post 10 text',
      selected: false,
    },
    {
      id: Guid.create(),
      title: 'Post 11',
      body: 'Post 11 text',
      selected: false,
    },
    {
      id: Guid.create(),
      title: 'Post 12',
      body: 'Post 12 text',
      selected: false,
    },
    {
      id: Guid.create(),
      title: 'Post 13',
      body: 'Post 13 text',
      selected: false,
    },
    {
      id: Guid.create(),
      title: 'Post 14',
      body: 'Post 14 text',
      selected: false,
    },
    {
      id: Guid.create(),
      title: 'Post 15',
      body: 'Post 15 text',
      selected: false,
    },
    {
      id: Guid.create(),
      title: 'Post 16',
      body: 'Post 16 text',
      selected: false,
    },
    {
      id: Guid.create(),
      title: 'Post 17',
      body: 'Post 17 text',
      selected: false,
    },
    {
      id: Guid.create(),
      title: 'Post 18',
      body: 'Post 18 text',
      selected: false,
    },
    {
      id: Guid.create(),
      title: 'Post 19',
      body: 'Post 19 text',
      selected: false,
    },
    {
      id: Guid.create(),
      title: 'Post 20',
      body: 'Post 20 text',
      selected: false,
    },
  ];
  searchText = '';
  onSubmit(form: NgForm) {
    let post = new Post(
      Guid.create(),
      form.value.title,
      form.value.body,
      false
    );
    this.posts.push(post);
    form.resetForm();
  }
  onDelete(id: Guid) {
    this.posts = this.posts.filter((elm) => elm.id !== id);
  }
  onSelect(post: Post) {
    post.selected = !post.selected;
  }
  deleteSelectedPosts() {
    this.posts = this.posts.filter((post) => !post.selected);
  }
}
