import { Component } from '@angular/core';
import IRegistration from 'src/app/core/models/registration.model';
import { RegistrationService } from 'src/app/core/services/registration.service';

@Component({
  selector: 'app-registrations',
  templateUrl: './registrations.component.html',
  styleUrls: ['./registrations.component.scss'],
})
export class RegistrationsComponent {
  registration: IRegistration[] = [];
  filtered: IRegistration[] = [];
  searchText: string = '';

  constructor(private registrationService: RegistrationService) {
    this.getRegistrations();
  }

  getRegistrations() {
    this.registrationService
      .getRegistration()
      .subscribe((resp: IRegistration[] | any) => {
        this.registration = resp;
        this.filtered = [...this.registration];
      });
  }

  isSaved(value: boolean) {
    if (value) {
      this.getRegistrations();
    }
  }
}
