import { Pipe, PipeTransform } from '@angular/core';
import IRegistration from 'src/app/core/models/registration.model';

@Pipe({
  name: 'registrationFilter',
})
export class RegistrationFilterPipe implements PipeTransform {
  transform(
    registration: IRegistration[],
    searchText: string
  ): IRegistration[] {
    if (!registration || !searchText) {
      return registration;
    }

    return registration.filter(
      (register) =>
        register
          .studentName!.toLocaleLowerCase()
          .includes(searchText.toLocaleLowerCase()) ||
        register
          .subjectName!.toLocaleLowerCase()
          .includes(searchText.toLocaleLowerCase())
    );
  }
}
