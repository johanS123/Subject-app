import { Component } from '@angular/core';
import IStudent from 'src/app/core/models/student.model';
import { StudentsService } from 'src/app/core/services/students.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss'],
})
export class StudentsComponent {
  students: IStudent[] = [];
  filtered: IStudent[] = [];
  searchText: string = '';

  constructor(private studentsService: StudentsService) {
    this.getStudents();
  }

  getStudents() {
    this.studentsService.getStudent().subscribe((resp: IStudent[] | any) => {
      this.students = resp;
      this.filtered = [...this.students];
    });
  }

  isSaved(value: boolean) {
    if (value) {
      this.getStudents();
    }
  }
}
