import { Pipe, PipeTransform } from '@angular/core';
import ITeacher from 'src/app/core/models/teacher.model';

@Pipe({
  name: 'teacherFilter',
})
export class TeacherFilterPipe implements PipeTransform {
  transform(teachers: ITeacher[], searchText: string): ITeacher[] {
    if (!teachers || !searchText) {
      return teachers;
    }

    return teachers.filter((teacher) =>
      teacher.nameTeacher
        .toLocaleLowerCase()
        .includes(searchText.toLocaleLowerCase())
    );
  }
}
