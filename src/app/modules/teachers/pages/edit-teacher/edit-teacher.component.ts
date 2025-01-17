import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import ITeacher from 'src/app/core/models/teacher.model';
import { AlertsService } from 'src/app/core/services/alerts.service';
import { TeachersService } from 'src/app/core/services/teachers.service';

@Component({
  selector: 'app-edit-teacher',
  templateUrl: './edit-teacher.component.html',
  styleUrls: ['./edit-teacher.component.scss'],
})
export class EditTeacherComponent {
  form!: FormGroup;
  id!: number;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private teachersService: TeachersService,
    private alertsService: AlertsService,
    private router: Router
  ) {
    this.id = +this.route.snapshot.paramMap.get('id')!;
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

    this.completeField(this.id);
  }

  completeField(id: number) {
    this.teachersService
      .getTeacherById(id)
      .subscribe((teacher: ITeacher | any) => {
        this.form.setValue({
          name: teacher.nameTeacher,
          document: teacher.document,
        });
      });
  }

  // Método para manejar el envío del formulario
  onSubmit() {
    if (this.form.valid) {
      let { name, document } = this.form.value;

      let body: ITeacher = {
        teacherId: this.id,
        nameTeacher: name,
        document: Number(document),
      };

      let id = this.id;

      this.teachersService.putTeacher(body, id).subscribe(
        (res: any) => {
          this.alertsService.showAlert(
            'Profesor Editado',
            'El profesor se ha editar exitosamente',
            'success'
          );
          this.form.reset(); // Reinicia el formulario
          this.router.navigate(['/teachers']);
        },
        (err) => {
          this.alertsService.showAlert(
            'Hubo un error!!',
            'El profesor no se pudo editar, intente mas tarde!!',
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
