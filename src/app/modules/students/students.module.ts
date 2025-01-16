import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsComponent } from './pages/students/students.component';
import { AddStudentComponent } from './pages/add-student/add-student.component';
import { StudentListComponent } from './components/student-list/student-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StudentsRoutingModule } from './student-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { StudentsService } from 'src/app/core/services/students.service';



@NgModule({
  declarations: [
    StudentsComponent,
    AddStudentComponent,
    StudentListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    StudentsRoutingModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule
  ],
  providers: [StudentsService]
})
export class StudentsModule { }
