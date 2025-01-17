import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubjectsComponent } from './pages/subjects/subjects.component';
import { AddSubjectComponent } from './pages/add-subject/add-subject.component';
import { SubjectListComponent } from './components/subject-list/subject-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SubjectsRoutingModule } from './subjects-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { SubjectsService } from 'src/app/core/services/subjects.service';
import { SubjectFilterPipe } from './pipe/subject-filter.pipe';
import { RouterModule } from '@angular/router';
import { TeachersService } from 'src/app/core/services/teachers.service';
import { EditSubjectComponent } from './pages/edit-subject/edit-subject.component';

@NgModule({
  declarations: [
    SubjectsComponent,
    AddSubjectComponent,
    SubjectListComponent,
    SubjectFilterPipe,
    EditSubjectComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    SubjectsRoutingModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule,
  ],
  providers: [SubjectsService, TeachersService],
})
export class SubjectsModule {}
