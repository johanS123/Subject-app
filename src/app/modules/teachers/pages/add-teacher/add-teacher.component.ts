import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import ITeacher from 'src/app/core/models/teacher.model';
import { AlertsService } from 'src/app/core/services/alerts.service';
import { TeachersService } from 'src/app/core/services/teachers.service';

@Component({
  selector: 'app-add-teacher',
  templateUrl: './add-teacher.component.html',
  styleUrls: ['./add-teacher.component.scss'],
})
export class AddTeacherComponent {
  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private teachersService: TeachersService,
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

      let body: ITeacher = {
        nameTeacher: name,
        document: Number(document),
      };

      this.teachersService.postTeacher(body).subscribe(
        (res: any) => {
          this.alertsService.showAlert(
            'Profesor Creado',
            'El profesor se ha creado exitosamente',
            'success'
          );
          this.form.reset();
          this.router.navigate(['/teachers']);
        },
        (err) => {
          this.alertsService.showAlert(
            'Hubo un error',
            'El profesor no se pudo crear, intente mas tarde!!',
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
