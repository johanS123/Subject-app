import { Component, EventEmitter, Input, Output } from '@angular/core';
import ISubject from 'src/app/core/models/subject.model';
import { AlertsService } from 'src/app/core/services/alerts.service';
import { SubjectsService } from 'src/app/core/services/subjects.service';

@Component({
  selector: 'app-subject-list',
  templateUrl: './subject-list.component.html',
  styleUrls: ['./subject-list.component.scss'],
})
export class SubjectListComponent {
  @Input() subjects: ISubject[] = [];
  @Output('isSaved') isSaved = new EventEmitter<boolean>();

  constructor(
    private alertsService: AlertsService,
    private subjectsService: SubjectsService
  ) {}

  deleteRegister(id: number | any) {
    this.alertsService
      .showConfirm(
        '¿Seguro que va eliminar el registro?',
        'Esta operacion es irreversible!!'
      )
      .then((result) => {
        if (result.isConfirmed) {
          this.subjectsService.deleteSubject(id).subscribe(
            (res: any) => {
              this.alertsService.showAlert(
                'Estudiante eliminado',
                'Se elimino correctamente el registro',
                'success'
              );
              this.isSaved.emit(true);
            },
            (err) => {
              this.alertsService.showAlert(
                'Hubo un error',
                'No se pudo eliminar el registro',
                'error'
              );
              this.isSaved.emit(false);
            }
          );
        }
      });
  }
}
