import ISubject from './subject.model';

export default interface ITeacher {
  teacherId?: number;
  nameTeacher: string;
  document: number;
  subjects?: ISubject[];
}
