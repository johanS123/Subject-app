import { Pipe, PipeTransform } from '@angular/core';
import IUser from 'src/app/core/models/user.model';

@Pipe({
  name: 'userFilter'
})
export class UserFilterPipe implements PipeTransform {

  transform(users: IUser[], searchText: string): IUser[] {
    if (!users || !searchText) {
      return users;
    }
    return users.filter(user => user.fullname.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()))
  }

}
