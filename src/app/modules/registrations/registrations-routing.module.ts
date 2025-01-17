import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { RegistrationsComponent } from './pages/registrations/registrations.component';
import { AddRegistrationComponent } from './pages/add-registration/add-registration.component';
import { EditRegistrationComponent } from './pages/edit-registration/edit-registration.component';

const routes: Routes = [
  { path: '', component: RegistrationsComponent },
  { path: 'add-registration', component: AddRegistrationComponent },
  { path: 'edit-registration/:id', component: EditRegistrationComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistrationsRoutingModule {}
