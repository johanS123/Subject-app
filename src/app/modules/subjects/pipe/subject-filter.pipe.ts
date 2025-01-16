import { Pipe, PipeTransform } from '@angular/core';
import ISubject from 'src/app/core/models/subject.model';

@Pipe({
  name: 'subjectFilter'
})
export class SubjectFilterPipe implements PipeTransform {

  transform(subjects: ISubject[], searchText: string): ISubject[] {
    if (!subjects || !searchText) {
      return subjects;
    }
    return subjects.filter(subject => subject.nameSubject.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()))
  }

}
