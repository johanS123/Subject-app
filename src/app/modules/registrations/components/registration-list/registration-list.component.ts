import { Component, EventEmitter, Input, Output } from '@angular/core';
import IRegistration from 'src/app/core/models/registration.model';
import { AlertsService } from 'src/app/core/services/alerts.service';
import { RegistrationService } from 'src/app/core/services/registration.service';

@Component({
  selector: 'app-registration-list',
  templateUrl: './registration-list.component.html',
  styleUrls: ['./registration-list.component.scss'],
})
export class RegistrationListComponent {
  @Input() registration: IRegistration[] = [];
  @Output('isSaved') isSaved = new EventEmitter<boolean>();

  constructor(
    private alertsService: AlertsService,
    private registrationService: RegistrationService
  ) {}

  deleteRegister(id: number | any) {
    this.alertsService
      .showConfirm(
        '¿Seguro que va eliminar el registro?',
        'Esta operacion es irreversible!!'
      )
      .then((result) => {
        if (result.isConfirmed) {
          this.registrationService.deleteRegistration(id).subscribe(
            (res: any) => {
              this.alertsService.showAlert(
                'Inscripción eliminada',
                'Se elimino correctamente el registro',
                'success'
              );
              this.isSaved.emit(true);
            },
            (err) => {
              this.alertsService.showAlert('Hubo un error', err.error, 'error');
              this.isSaved.emit(false);
            }
          );
        }
      });
  }
}
