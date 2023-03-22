import { Guid } from 'guid-typescript';
export class Post {
  constructor(public id: Guid, public title: string, public body: string, public selected:Boolean) {}
}
