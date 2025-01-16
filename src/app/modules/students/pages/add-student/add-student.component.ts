import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import IStudent from 'src/app/core/models/student.model';
import { StudentsService } from 'src/app/core/services/students.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss']
})
export class AddStudentComponent {
  form!: FormGroup;
  
    constructor(private fb: FormBuilder, private studentsService: StudentsService) {
      // Inicializa el formulario con sus validaciones
      this.form = this.fb.group({
        name: ['', Validators.required]
      });
    }
  
     // Método para manejar el envío del formulario
     onSubmit() {
      if (this.form.valid) {
        let { name } = this.form.value;
        
        let body: IStudent = {
          nameStudent: name
        }
  
        this.studentsService.postStudent(body).subscribe((res: any) => {
          alert('Materia creada con éxito');
          this.form.reset(); // Reinicia el formulario
        })
        
      } else {
        alert('Por favor, completa todos los campos correctamente.');
      }
    }
  
    // Acceso rápido a los controles para validaciones
    get f() {
      return this.form.controls;
    }
}
