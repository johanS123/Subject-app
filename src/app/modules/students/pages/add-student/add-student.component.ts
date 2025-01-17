import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import IStudent from 'src/app/core/models/student.model';
import { StudentsService } from 'src/app/core/services/students.service';
import { AlertsService } from '../../../../core/services/alerts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss'],
})
export class AddStudentComponent {
  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private studentsService: StudentsService,
    private alertsService: AlertsService,
    private router: Router
  ) {
    // Inicializa el formulario con sus validaciones
    this.form = this.fb.group({
      name: ['', Validators.required],
      document: [
        '',
        [
          Validators.required,
          Validators.min(3),
          Validators.pattern('^[0-9]*$'),
        ],
      ],
    });
  }

  // Método para manejar el envío del formulario
  onSubmit() {
    if (this.form.valid) {
      let { name, document } = this.form.value;

      let body: IStudent = {
        nameStudent: name,
        document: Number(document),
      };

      this.studentsService.postStudent(body).subscribe(
        (res: any) => {
          this.alertsService.showAlert(
            'Estudiante Creado',
            'El estudiante se ha creado exitosamente',
            'success'
          );
          this.form.reset();
          this.router.navigate(['/students']);
        },
        (err) => {
          this.alertsService.showAlert(
            'Hubo un error',
            'El estudiante no se pudo crear, intente mas tarde!!',
            'error'
          );
          console.error(err);
        }
      );
    }
  }

  // Acceso rápido a los controles para validaciones
  get f() {
    return this.form.controls;
  }
}
