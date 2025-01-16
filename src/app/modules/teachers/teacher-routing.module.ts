import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { TeachersComponent } from "./pages/teachers/teachers.component";
import { AddTeacherComponent } from "./pages/add-teacher/add-teacher.component";

const routes: Routes = [
    {   path: '', 
        component: TeachersComponent,
    },
    { path: 'add-subject', component:  AddTeacherComponent }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class TeachersRoutingModule {}