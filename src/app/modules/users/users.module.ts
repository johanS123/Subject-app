import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './pages/users/users.component';
import { AddUsersComponent } from './pages/add-users/add-users.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserFilterPipe } from './pipe/user-filter.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UsersRoutingModule } from './users-routing.module';
import { UsersService } from 'src/app/core/services/users.service';



@NgModule({
  declarations: [
    UsersComponent,
    AddUsersComponent,
    UserListComponent,
    UserFilterPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    UsersRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [UsersService]
})
export class UsersModule { }
