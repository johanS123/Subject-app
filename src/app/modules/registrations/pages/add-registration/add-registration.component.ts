import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import IRegistration from 'src/app/core/models/registration.model';
import IStudent from 'src/app/core/models/student.model';
import ISubject from 'src/app/core/models/subject.model';
import { AlertsService } from 'src/app/core/services/alerts.service';
import { RegistrationService } from 'src/app/core/services/registration.service';
import { StudentsService } from 'src/app/core/services/students.service';
import { SubjectsService } from 'src/app/core/services/subjects.service';

@Component({
  selector: 'app-add-registration',
  templateUrl: './add-registration.component.html',
  styleUrls: ['./add-registration.component.scss'],
})
export class AddRegistrationComponent {
  form!: FormGroup;
  students: IStudent[] = [];
  subjects: ISubject[] = [];

  constructor(
    private fb: FormBuilder,
    private registrationService: RegistrationService,
    private alertsService: AlertsService,
    private subjectsService: SubjectsService,
    private studentsService: StudentsService,
    private router: Router
  ) {
    this.getSubjects();
    this.getStudents();
    // Inicializa el formulario con sus validaciones
    this.form = this.fb.group({
      student: ['', Validators.required],
      subject: ['', Validators.required],
    });
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

  // Método para manejar el envío del formulario
  onSubmit() {
    if (this.form.valid) {
      let { student, subject } = this.form.value;

      let body: IRegistration = {
        subjectId: Number(subject),
        studentId: Number(student),
      };

      this.registrationService.postRegistration(body).subscribe(
        (res: any) => {
          this.alertsService.showAlert(
            'Inscripcion Creada',
            'La Inscripción se ha creado exitosamente',
            'success'
          );
          this.form.reset();
          this.router.navigate(['/registrations']);
        },
        (err) => {
          this.alertsService.showAlert('Hubo un error', err.error, 'error');
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
