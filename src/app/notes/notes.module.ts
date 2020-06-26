import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NotesComponent } from './notes.component';
import { NoteEditComponent } from './notes.component';
import { NoteAddComponent } from './notes.component';

import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';

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
export class NotesModule { }
