import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import IStudent from '../models/student.model';

const API_URL = 'https://localhost:7267/api';

@Injectable({
  providedIn: 'root',
})
export class StudentsService {
  constructor(private http: HttpClient) {}

  getStudent() {
    return this.http.get(`${API_URL}/Student`);
  }

  getStudentById(id: number) {
    return this.http.get(`${API_URL}/Student/${id}`);
  }

  postStudent(body: IStudent) {
    return this.http.post(`${API_URL}/Student`, body);
  }

  putStudent(body: IStudent, id: number) {
    return this.http.put(`${API_URL}/Student/${id}`, body);
  }

  deleteStudent(id: number) {
    return this.http.delete(`${API_URL}/Student/${id}`);
  }
}
