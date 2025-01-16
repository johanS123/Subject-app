import { Component } from '@angular/core';
import IUser from 'src/app/core/models/user.model';
import { UsersService } from 'src/app/core/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  users: IUser[] = [];
    filtered: IUser[] = [];
    newSubject: string = '';
    searchText: string = '';
  
    constructor(private usersService: UsersService) {
      this.getUser();
    }
  
    getUser() {
      this.usersService.getUser().subscribe((resp: IUser[] | any) => {
        this.users = resp;
        this.filtered = [...this.users];
      });
    }
}
