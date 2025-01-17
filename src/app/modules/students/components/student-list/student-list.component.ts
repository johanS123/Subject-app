import { Component, EventEmitter, Input, Output } from '@angular/core';
import IStudent from 'src/app/core/models/student.model';
import { AlertsService } from '../../../../core/services/alerts.service';
import { StudentsService } from '../../../../core/services/students.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss'],
})
export class StudentListComponent {
  @Input() students: IStudent[] = [];
  @Output('isSaved') isSaved = new EventEmitter<boolean>();

  constructor(
    private alertsService: AlertsService,
    private studentsService: StudentsService
  ) {}

  deleteRegister(id: number | any) {
    this.alertsService
      .showConfirm(
        '¿Seguro que va eliminar el registro?',
        'Esta operacion es irreversible!!'
      )
      .then((result) => {
        if (result.isConfirmed) {
          this.studentsService.deleteStudent(id).subscribe(
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
