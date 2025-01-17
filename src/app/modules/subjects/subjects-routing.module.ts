import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { SubjectsComponent } from './pages/subjects/subjects.component';
import { AddSubjectComponent } from './pages/add-subject/add-subject.component';
import { EditSubjectComponent } from './pages/edit-subject/edit-subject.component';

const routes: Routes = [
  { path: '', component: SubjectsComponent },
  { path: 'add-subject', component: AddSubjectComponent },
  { path: 'edit-subject/:id', component: EditSubjectComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubjectsRoutingModule {}
