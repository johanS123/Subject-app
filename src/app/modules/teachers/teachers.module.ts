import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeachersComponent } from './pages/teachers/teachers.component';
import { AddTeacherComponent } from './pages/add-teacher/add-teacher.component';
import { TeacherListComponent } from './components/teacher-list/teacher-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TeachersRoutingModule } from './teacher-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    TeachersComponent,
    AddTeacherComponent,
    TeacherListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    TeachersRoutingModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class TeachersModule { }
