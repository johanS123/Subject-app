import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import ISubject from 'src/app/core/models/subject.model';
import ITeacher from 'src/app/core/models/teacher.model';
import { AlertsService } from 'src/app/core/services/alerts.service';
import { SubjectsService } from 'src/app/core/services/subjects.service';
import { TeachersService } from 'src/app/core/services/teachers.service';

@Component({
  selector: 'app-edit-subject',
  templateUrl: './edit-subject.component.html',
  styleUrls: ['./edit-subject.component.scss'],
})
export class EditSubjectComponent {
  form!: FormGroup;
  id!: number;
  teachers: ITeacher[] = [];

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private subjectsService: SubjectsService,
    private alertsService: AlertsService,
    private router: Router,
    private teachersService: TeachersService
  ) {
    this.id = +this.route.snapshot.paramMap.get('id')!;
    this.getTeachers();

    this.form = this.fb.group({
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

    this.completeField(this.id);
  }

  getTeachers() {
    this.teachersService.getTeacher().subscribe((resp: ITeacher | any) => {
      this.teachers = resp;
    });
  }

  completeField(id: number) {
    this.subjectsService
      .getSubjectById(id)
      .subscribe((subject: ISubject | any) => {
        console.log(subject);
        this.form.setValue({
          name: subject.nameSubject,
          credits: subject.credits,
          teacher: subject.teacherId,
        });
      });
  }

  // Método para manejar el envío del formulario
  onSubmit() {
    if (this.form.valid) {
      let { name, credits, teacher } = this.form.value;

      let body: ISubject = {
        subjectId: this.id,
        nameSubject: name,
        credits: Number(credits),
        teacherId: Number(teacher),
      };

      let id = this.id;

      this.subjectsService.putSubject(body, id).subscribe(
        (res: any) => {
          this.alertsService.showAlert(
            'Materia Editada',
            'La Materia se ha editado exitosamente'
          );
          this.form.reset(); // Reinicia el formulario
          this.router.navigate(['/subjects']);
        },
        (err) => {
          this.alertsService.showAlert(
            'Hubo un error!!',
            'La Materia no se pudo editar, intente mas tarde!!'
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
