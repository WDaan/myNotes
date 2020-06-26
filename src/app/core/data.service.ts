import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {INote} from '../shared/interfaces';
import {Note} from '../classes/note';

@Injectable()
export class DataService {
  private notes: INote[];
  private nextId: number;

  constructor() {
    const notes = this.getNotes();
    if (notes.length == 0) {
      this.nextId = 0;
    } else {
      const maxId = notes[notes.length - 1].id;
      this.nextId = maxId + 1;
    }
  }

  public addNote(title: string, content: string) {
    const note = new Note(this.nextId, title, content);
    const notes = this.getNotes();
    notes.unshift(note);
    this.setLocalStorageNotes(notes);
    this.nextId++;
  }

  public getNotes() {
    const localStorageItem = JSON.parse(localStorage.getItem('notes'));
    return localStorageItem == null ? [] : localStorageItem.notes;
  }

  public removeNote(id: number): void {
    let notes = this.getNotes();
    notes = notes.filter(note => note.id != id);
    this.setLocalStorageNotes(notes);
  }

  private setLocalStorageNotes(notes: INote[]) {
    localStorage.setItem('notes', JSON.stringify({notes}));
  }

  public editTitle(id: number, title: string) {
    const notes = this.getNotes();
    notes[id].Title = title;
    this.setLocalStorageNotes(notes);
  }

  public editContent(id: number, content: string) {
    const notes = this.getNotes();
    notes[id].content = content;
    this.setLocalStorageNotes(notes);
  }

  /* ----- JSON FILE uilezen ----------*/

  /*
    baseUrl: string = 'assets/';

    constructor(private http: HttpClient) { }

    getNotes(): Observable<INote[]>{
        return this.http.get<INote[]>(this.baseUrl + 'notes.json')
            .pipe(
                catchError(this.handleError)
            );
    }

    getNote(title: string) : Observable<INote> {
        return this.http.get<INote[]>(this.baseUrl + 'notes.json')
          .pipe(
            map(notes => {
              let note = notes.filter((note: INote) => note.Title === title);
              return (note && note.length) ? note[0] : null;
            }),
            catchError(this.handleError)
          )
    }

    //werkt enkel voor remote server

    setNotes(note: INote): Observable<INote> {
        let info = JSON.stringify(note);
        return this.http.post<INote>('../assets/notes.json', info).pipe(
            catchError(this.handleError)
          );
    }


    private handleError(error: any) {
      console.error('server error:', error);
      if (error.error instanceof Error) {
          const errMessage = error.error.message;
          return Observable.throw(errMessage);
          // Use the following instead if using lite-server
          // return Observable.throw(err.text() || 'backend server error');
      }
      return Observable.throw(error || 'Node.js server error');
    }
    */
}
