import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import ISubject from 'src/app/core/models/subject.model';
import ITeacher from 'src/app/core/models/teacher.model';
import { SubjectsService } from 'src/app/core/services/subjects.service';
import { TeachersService } from '../../../../core/services/teachers.service';
import { AlertsService } from 'src/app/core/services/alerts.service';

@Component({
  selector: 'app-add-subject',
  templateUrl: './add-subject.component.html',
  styleUrls: ['./add-subject.component.scss'],
})
export class AddSubjectComponent {
  subjectForm!: FormGroup;
  teachers: ITeacher[] = [];

  constructor(
    private fb: FormBuilder,
    private subjectsService: SubjectsService,
    private teachersService: TeachersService,
    private alertsService: AlertsService,
    private router: Router
  ) {
    this.getTeachers();
    // Inicializa el formulario con sus validaciones
    this.subjectForm = this.fb.group({
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50),
        ],
      ],
      credits: [
        '',
        [Validators.required, Validators.min(1), Validators.max(3)],
      ],
      teacher: ['', Validators.required],
    });
  }

  getTeachers() {
    this.teachersService.getTeacher().subscribe((resp: ITeacher | any) => {
      this.teachers = resp;
    });
  }

  // Método para manejar el envío del formulario
  onSubmit() {
    if (this.subjectForm.valid) {
      let { name, credits, teacher } = this.subjectForm.value;

      let body: ISubject = {
        nameSubject: name,
        credits: Number(credits),
        teacherId: Number(teacher),
      };

      this.subjectsService.postSubject(body).subscribe(
        (res: any) => {
          this.alertsService.showAlert(
            'Materia Creada',
            'La materia se ha creado exitosamente',
            'success'
          );
          this.subjectForm.reset();
          this.router.navigate(['/subjects']);
        },
        (err) => {
          this.alertsService.showAlert('Hubo un error!!', err.error, 'warning');
          console.error(err);
        }
      );
    }
  }

  // Acceso rápido a los controles para validaciones
  get f() {
    return this.subjectForm.controls;
  }
}
