import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationsComponent } from './pages/registrations/registrations.component';
import { AddRegistrationComponent } from './pages/add-registration/add-registration.component';
import { RegistrationListComponent } from './components/registration-list/registration-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistrationsRoutingModule } from './registrations-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { RegistrationService } from 'src/app/core/services/registration.service';
import { SubjectsService } from 'src/app/core/services/subjects.service';
import { StudentsService } from 'src/app/core/services/students.service';
import { RegistrationFilterPipe } from './pipe/registration-filter.pipe';
import { EditRegistrationComponent } from './pages/edit-registration/edit-registration.component';

@NgModule({
  declarations: [
    RegistrationsComponent,
    AddRegistrationComponent,
    RegistrationListComponent,
    RegistrationFilterPipe,
    EditRegistrationComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RegistrationsRoutingModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule,
  ],
  providers: [RegistrationService, SubjectsService, StudentsService],
})
export class RegistrationsModule {}
