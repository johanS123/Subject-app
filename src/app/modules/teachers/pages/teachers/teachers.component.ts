import { Component } from '@angular/core';
import ITeacher from 'src/app/core/models/teacher.model';
import { TeachersService } from 'src/app/core/services/teachers.service';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.scss'],
})
export class TeachersComponent {
  teachers: ITeacher[] = [];
  filtered: ITeacher[] = [];
  searchText: string = '';

  constructor(private teachersService: TeachersService) {
    this.getTeachers();
  }

  getTeachers() {
    this.teachersService.getTeacher().subscribe((resp: ITeacher[] | any) => {
      console.log(resp);
      this.teachers = resp;
      this.filtered = [...this.teachers];
    });
  }

  isSaved(value: boolean) {
    if (value) {
      this.getTeachers();
    }
  }
}
