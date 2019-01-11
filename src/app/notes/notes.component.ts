import {Component, OnInit, Inject} from "@angular/core";

import {INote} from "../shared/interfaces";

import {DataService} from "../core/data.service";
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from "@angular/material";

export interface EditData {
  editTitle: string;
  newtitle: string;
  newcontent: string;
  ndata: any;
}

@Component({
  selector: "app-notes",
  templateUrl: "./notes.component.html",
  styleUrls: ["./notes.component.scss"]
})
export class NotesComponent implements OnInit {
  titleModel: string = "";
  contentModel: string = "";
  notes: INote[] = [];

  constructor(private dataService: DataService, public dialog: MatDialog) {}

  editTitle: string;

  noteData: any = {
    newtitle: "",
    newcontent: "",
    index: 0
  };

  ngOnInit() {
    this.notes = this.dataService.getNotes();
  }

  private createNote(): void {
    if (this.noteData.newtitle !== "" && this.noteData.newcontent !== "") {
      this.dataService.addNote(
        this.noteData.newtitle,
        this.noteData.newcontent
      );
      this.update();
    }
    // set the model values to '' again
    this.noteData.newtitle = "";
    this.noteData.newcontent = "";
  }

  private deleteNote(i) {
    let id = this.notes[i].id;
    this.dataService.removeNote(id);
    this.update();
  }

  private update(): void {
    this.notes = this.dataService.getNotes();
  }

  private editNote(i): void {
    this.editTitle = this.notes[i].Title;
    this.noteData.index = i;
    this.openDialog();
  }

  private processChange() {
    /*enkel titel*/
    if (this.noteData.newtitle !== "" && this.noteData.newcontent !== "") {
      this.dataService.editTitle(this.noteData.index, this.noteData.newtitle);
      this.dataService.editContent(
        this.noteData.index,
        this.noteData.newcontent
      );
    } else if (this.noteData.newcontent !== "") {
      /*enkel content*/
      this.dataService.editContent(
        this.noteData.index,
        this.noteData.newcontent
      );
    } else if (this.noteData.newtitle !== "") {
      /*enkel title*/
      this.dataService.editTitle(this.noteData.index, this.noteData.newtitle);
    }
    this.noteData.newtitle = "";
    this.noteData.newcontent = "";

    this.update();
  }

  public addNewNote() {
    this.openAddDialog();
  }

  /*------edit venster openen ---- */
  openDialog(): void {
    const dialogRef = this.dialog.open(NoteEditComponent, {
      width: "250px",
      data: {editTitle: this.editTitle, ndata: this.noteData}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("The dialog was closed");
      this.processChange();
    });
  }

  /*------add venster openen ---- */
  openAddDialog(): void {
    const dialogRef = this.dialog.open(NoteAddComponent, {
      width: "250px",
      data: {ndata: this.noteData}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("The add was closed");

      this.createNote();
    });
  }
}

@Component({
  selector: "app-note-edit",
  templateUrl: "./notes-edit.component.html"
})
export class NoteEditComponent {
  constructor(
    public dialogRef: MatDialogRef<NoteEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: EditData
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}

@Component({
  selector: "app-note-edit",
  templateUrl: "./notes-add.component.html"
})
export class NoteAddComponent {
  constructor(
    public dialogRef: MatDialogRef<NoteAddComponent>,
    @Inject(MAT_DIALOG_DATA) public data: EditData
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}

/*-------------- JSON FILE uitlezen -------------- */

/*  
      this.dataService
        .getNotes()
        .subscribe((notes: INote[]) => (this.notes = notes));
    }
    ngOnInit() {}
  
    createNotes() {
      const newNotes: INote = {
        Title: this.titleModel,
        description: this.discriptionModel,
        content: this.contentModel
      };
  
      if (newNotes.Title !== "") {
        this.notes.unshift(newNotes);
        //this.dataService.setNotes(newNotes)
        //.subscribe(note => this.notes.unshift(note));
      }
  
      // set the model values to '' again
      this.titleModel = this.discriptionModel = this.contentModel = "";
    }
  
    deleteNote(i) {
      this.notes.splice(i, 1);
    }
  
    editNote(i) {
      console.log("edit note " + i);
    }
    */
