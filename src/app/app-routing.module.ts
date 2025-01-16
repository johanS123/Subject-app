import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'students',
    loadChildren: () => import('./modules/students/students.module').then(m => m.StudentsModule)
  },
  {
    path: 'teachers',
    loadChildren: () => import('./modules/teachers/teachers.module').then(m => m.TeachersModule)
  },
  {
    path: 'registrations',
    loadChildren: () => import('./modules/registrations/registrations.module').then(m => m.RegistrationsModule)
  },
  {
    path: 'users',
    loadChildren: () => import('./modules/users/users.module').then(m => m.UsersModule)
  },
  {
    path: 'subjects',
    loadChildren: () => import('./modules/subjects/subjects.module').then(m => m.SubjectsModule)
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
