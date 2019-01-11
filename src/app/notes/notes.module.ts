import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";

import {NotesComponent} from "./notes.component";
import {NoteEditComponent} from "./notes.component";
import {NoteAddComponent} from "./notes.component";

import {ReactiveFormsModule} from "@angular/forms";
import {
  MatButtonModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatInputModule,
  MatCardModule
} from "@angular/material";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatDialogModule} from "@angular/material/dialog";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatDialogModule
  ],
  declarations: [NotesComponent, NoteEditComponent, NoteAddComponent],
  exports: [NotesComponent],
  entryComponents: [NoteEditComponent, NoteAddComponent]
})
export class NotesModule {}
