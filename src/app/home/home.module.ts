import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NoteAddComponent } from '../notes/notes.component';
import { HomeComponent } from './home.component';

import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  imports: [CommonModule, FormsModule, MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatCardModule, MatInputModule,
    BrowserAnimationsModule, ReactiveFormsModule, MatDialogModule],
  declarations: [HomeComponent],
  exports: [HomeComponent, ],
  entryComponents: [ NoteAddComponent]
})
export class HomeModule { }
