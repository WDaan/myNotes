import { Component, OnInit, Inject } from '@angular/core';
import {INote} from "../shared/interfaces";
import {DataService} from "../core/data.service";
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from "@angular/material";
import {NoteAddComponent} from '../notes/notes.component'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  notes: INote[] = [];

  noteData: any = {
    newtitle: "",
    newcontent: "",
    index: 0
  };

  constructor(private dataService: DataService, public dialog: MatDialog) { }

  ngOnInit() {
    this.notes = this.dataService.getNotes();
  }

  private createNote(): void {
    if (this.noteData.newtitle !== "" && this.noteData.newcontent !== "") {
      this.dataService.addNote(this.noteData.newtitle, this.noteData.newcontent);
      this.update();
    }
    // set the model values to '' again
    this.noteData.newtitle = "";
    this.noteData.newcontent = "";
  }

  private update(): void {
    this.notes = this.dataService.getNotes();
  }

  openAddDialog(): void {
    const dialogRef = this.dialog.open(NoteAddComponent, {
      width: "250px",
      data: {ndata: this.noteData }
     
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("The add was closed");
      this.createNote();
    });
  }

  public addNewNote() {
    this.openAddDialog();
  }
}


