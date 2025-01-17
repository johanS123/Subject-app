import { Component, EventEmitter, Input, Output } from '@angular/core';
import ITeacher from 'src/app/core/models/teacher.model';
import { AlertsService } from 'src/app/core/services/alerts.service';
import { TeachersService } from 'src/app/core/services/teachers.service';

@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.scss'],
})
export class TeacherListComponent {
  @Input() teachers: ITeacher[] = [];
  @Output('isSaved') isSaved = new EventEmitter<boolean>();

  constructor(
    private alertsService: AlertsService,
    private teachersService: TeachersService
  ) {}

  deleteRegister(id: number | any) {
    this.alertsService
      .showConfirm(
        '¿Seguro que va eliminar el registro?',
        'Esta operacion es irreversible!!'
      )
      .then((result) => {
        if (result.isConfirmed) {
          this.teachersService.deleteTeacher(id).subscribe(
            (res: any) => {
              this.alertsService.showAlert(
                'Profesor eliminado',
                'Se elimino correctamente el registro'
              );
              this.isSaved.emit(true);
            },
            (err) => {
              this.alertsService.showAlert(
                'Hubo un error',
                'No se pudo eliminar el registro'
              );
              this.isSaved.emit(false);
            }
          );
        }
      });
  }
}
