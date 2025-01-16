import { Component, Input } from '@angular/core';
import ISubject from 'src/app/core/models/subject.model';

@Component({
  selector: 'app-subject-list',
  templateUrl: './subject-list.component.html',
  styleUrls: ['./subject-list.component.scss']
})
export class SubjectListComponent {
  @Input() subjects: ISubject[] = [];
}
