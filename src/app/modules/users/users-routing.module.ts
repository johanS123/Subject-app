import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { AddUsersComponent } from "./pages/add-users/add-users.component";
import { UsersComponent } from "./pages/users/users.component";

const routes: Routes = [
    {   path: '', 
        component: UsersComponent,
    },
    { path: 'add-users', component: AddUsersComponent }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class UsersRoutingModule {}