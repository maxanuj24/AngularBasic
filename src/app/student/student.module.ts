import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentComponent } from './student.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [StudentComponent],
  imports: [
    BrowserModule,
    CommonModule
  ],
  bootstrap:[StudentComponent]
})
export class StudentModule { }
