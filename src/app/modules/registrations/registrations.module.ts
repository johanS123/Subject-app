import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationsComponent } from './pages/registrations/registrations.component';
import { AddRegistrationComponent } from './pages/add-registration/add-registration.component';
import { RegistrationListComponent } from './components/registration-list/registration-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistrationsRoutingModule } from './registrations-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    RegistrationsComponent,
    AddRegistrationComponent,
    RegistrationListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RegistrationsRoutingModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class RegistrationsModule { }
