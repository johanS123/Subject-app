import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { SubjectsComponent } from "./pages/subjects/subjects.component";
import { AddSubjectComponent } from "./pages/add-subject/add-subject.component";

const routes: Routes = [
    {   path: '', 
        component: SubjectsComponent,
    },
    { path: 'add-subject', component: AddSubjectComponent }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class SubjectsRoutingModule {}