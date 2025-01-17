import { Pipe, PipeTransform } from '@angular/core';
import IStudent from 'src/app/core/models/student.model';

@Pipe({
  name: 'studentFilter',
})
export class StudentFilterPipe implements PipeTransform {
  transform(students: IStudent[], searchText: String): IStudent[] {
    if (!students || !searchText) {
      return students;
    }

    return students.filter((student) =>
      student.nameStudent
        .toLocaleLowerCase()
        .includes(searchText.toLocaleLowerCase())
    );
  }
}
