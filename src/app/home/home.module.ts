import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NoteAddComponent } from '../notes/notes.component'
import { HomeComponent } from "./home.component";

import { ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, MatCardModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  imports: [CommonModule, FormsModule, MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatCardModule, MatInputModule,
    BrowserAnimationsModule, ReactiveFormsModule, MatDialogModule],
  declarations: [HomeComponent],
  exports: [HomeComponent,],
  entryComponents:[ NoteAddComponent]
})
export class HomeModule { }