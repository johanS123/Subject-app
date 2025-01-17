import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import IRegistration from 'src/app/core/models/registration.model';
import IStudent from 'src/app/core/models/student.model';
import ISubject from 'src/app/core/models/subject.model';
import { AlertsService } from 'src/app/core/services/alerts.service';
import { RegistrationService } from 'src/app/core/services/registration.service';
import { StudentsService } from 'src/app/core/services/students.service';
import { SubjectsService } from 'src/app/core/services/subjects.service';

@Component({
  selector: 'app-edit-registration',
  templateUrl: './edit-registration.component.html',
  styleUrls: ['./edit-registration.component.scss'],
})
export class EditRegistrationComponent {
  form!: FormGroup;
  id!: number;
  students: IStudent[] = [];
  subjects: ISubject[] = [];

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private registrationService: RegistrationService,
    private alertsService: AlertsService,
    private router: Router,
    private subjectsService: SubjectsService,
    private studentsService: StudentsService
  ) {
    this.id = +this.route.snapshot.paramMap.get('id')!;

    this.getSubjects();
    this.getStudents();

    this.form = this.fb.group({
      student: ['', Validators.required],
      subject: ['', Validators.required],
    });

    this.completeField(this.id);
  }

  getSubjects() {
    this.subjectsService.getSubject().subscribe((resp: ISubject | any) => {
      this.subjects = resp;
    });
  }

  getStudents() {
    this.studentsService.getStudent().subscribe((resp: IStudent | any) => {
      this.students = resp;
    });
  }

  completeField(id: number) {
    this.registrationService
      .getRegistrationById(id)
      .subscribe((register: IRegistration | any) => {
        this.form.setValue({
          subject: register.subjectId,
          student: register.studentId,
        });
      });
  }

  // Método para manejar el envío del formulario
  onSubmit() {
    if (this.form.valid) {
      let { student, subject } = this.form.value;

      let body: IRegistration = {
        registrationId: this.id,
        subjectId: Number(subject),
        studentId: Number(student),
      };

      let id = this.id;

      this.registrationService.putRegistration(body, id).subscribe(
        (res: any) => {
          this.alertsService.showAlert(
            'Inscripción Editada',
            'La Inscripción se ha editado exitosamente',
            'success'
          );
          this.form.reset(); // Reinicia el formulario
          this.router.navigate(['/registrations']);
        },
        (err) => {
          this.alertsService.showAlert(
            'Hubo un error!!',
            'El estudiante no se pudo editar, intente mas tarde!!',
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
