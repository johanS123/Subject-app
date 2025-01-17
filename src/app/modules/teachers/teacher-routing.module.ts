import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { TeachersComponent } from './pages/teachers/teachers.component';
import { AddTeacherComponent } from './pages/add-teacher/add-teacher.component';
import { EditTeacherComponent } from './pages/edit-teacher/edit-teacher.component';

const routes: Routes = [
  { path: '', component: TeachersComponent },
  { path: 'add-teacher', component: AddTeacherComponent },
  { path: 'edit-teacher/:id', component: EditTeacherComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeachersRoutingModule {}
