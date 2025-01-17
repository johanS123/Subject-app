import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import IStudent from 'src/app/core/models/student.model';
import { AlertsService } from 'src/app/core/services/alerts.service';
import { StudentsService } from 'src/app/core/services/students.service';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.scss'],
})
export class EditStudentComponent {
  form!: FormGroup;
  id!: number;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private studentsService: StudentsService,
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
    this.studentsService
      .getStudentById(id)
      .subscribe((student: IStudent | any) => {
        this.form.setValue({
          name: student.nameStudent,
          document: student.document,
        });
      });
  }

  // Método para manejar el envío del formulario
  onSubmit() {
    if (this.form.valid) {
      let { name, document } = this.form.value;

      let body: IStudent = {
        studentId: this.id,
        nameStudent: name,
        document: Number(document),
      };

      let id = this.id;

      this.studentsService.putStudent(body, id).subscribe(
        (res: any) => {
          this.alertsService.showAlert(
            'Estudiante Editado',
            'El estudiante se ha editar exitosamente'
          );
          this.form.reset(); // Reinicia el formulario
          this.router.navigate(['/students']);
        },
        (err) => {
          this.alertsService.showAlert(
            'Hubo un error!!',
            'El estudiante no se pudo editar, intente mas tarde!!'
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
