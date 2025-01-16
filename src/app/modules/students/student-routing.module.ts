import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { StudentsComponent } from "./pages/students/students.component";
import { AddStudentComponent } from "./pages/add-student/add-student.component";

const routes: Routes = [
    {   path: '', 
        component: StudentsComponent,
    },
    { path: 'add-student', component:  AddStudentComponent }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class StudentsRoutingModule {}