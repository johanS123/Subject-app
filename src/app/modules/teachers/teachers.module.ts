import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeachersComponent } from './pages/teachers/teachers.component';
import { AddTeacherComponent } from './pages/add-teacher/add-teacher.component';
import { TeacherListComponent } from './components/teacher-list/teacher-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TeachersRoutingModule } from './teacher-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { TeachersService } from 'src/app/core/services/teachers.service';
import { TeacherFilterPipe } from './pipe/teacher-filter.pipe';
import { EditTeacherComponent } from './pages/edit-teacher/edit-teacher.component';

@NgModule({
  declarations: [
    TeachersComponent,
    AddTeacherComponent,
    TeacherListComponent,
    TeacherFilterPipe,
    EditTeacherComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    TeachersRoutingModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule,
  ],
  providers: [TeachersService],
})
export class TeachersModule {}
