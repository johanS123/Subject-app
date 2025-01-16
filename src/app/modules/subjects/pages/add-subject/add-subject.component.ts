import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import ISubject from 'src/app/core/models/subject.model';
import { SubjectsService } from 'src/app/core/services/subjects.service';

@Component({
  selector: 'app-add-subject',
  templateUrl: './add-subject.component.html',
  styleUrls: ['./add-subject.component.scss']
})
export class AddSubjectComponent {
  subjectForm!: FormGroup;

  constructor(private fb: FormBuilder, private subjectsService: SubjectsService) {
    // Inicializa el formulario con sus validaciones
    this.subjectForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      credits: ['', [Validators.required, Validators.min(1), Validators.max(3)]],
      mode: ['', Validators.required]
    });
  }

   // Método para manejar el envío del formulario
   onSubmit() {
    if (this.subjectForm.valid) {
      let { name, credits, mode } = this.subjectForm.value;
      
      let body: ISubject = {
        nameSubject:  name,
        credits: Number(credits),
        modality: Number(mode)
      }

      this.subjectsService.postSubject(body).subscribe((res: any) => {
        alert('Materia creada con éxito');
        this.subjectForm.reset(); // Reinicia el formulario
      })
      
    } else {
      alert('Por favor, completa todos los campos correctamente.');
    }
  }

  // Acceso rápido a los controles para validaciones
  get f() {
    return this.subjectForm.controls;
  }
}
