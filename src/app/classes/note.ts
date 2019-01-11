import {INote} from "../shared/interfaces";

export class Note implements INote {
  id: number;
  Title: string;
  content: string;
  favorite?: boolean;

  constructor(id: number, title: string, content: string) {
    this.id = id;
    this.Title = title;
    this.content = content;
    this.favorite = false;
  }
}
