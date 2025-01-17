import { Component } from '@angular/core';
import ISubject from 'src/app/core/models/subject.model';
import { SubjectsService } from 'src/app/core/services/subjects.service';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.scss'],
})
export class SubjectsComponent {
  subjects: ISubject[] = [];
  filteredSubjects: ISubject[] = [];
  newSubject: string = '';
  searchText: string = '';

  constructor(private subjectsService: SubjectsService) {
    this.getSubjects();
  }

  getSubjects() {
    this.subjectsService.getSubject().subscribe((resp: ISubject[] | any) => {
      this.subjects = resp;
      this.filteredSubjects = [...this.subjects];
    });
  }

  isSaved(value: boolean) {
    if (value) {
      this.getSubjects();
    }
  }
}
