import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { RegistrationsComponent } from "./pages/registrations/registrations.component";
import { AddRegistrationComponent } from "./pages/add-registration/add-registration.component";

const routes: Routes = [
    {   path: '', 
        component: RegistrationsComponent,
    },
    { path: 'add-registration', component: AddRegistrationComponent }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class RegistrationsRoutingModule {}