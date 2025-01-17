import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import ISubject from '../models/subject.model';

const API_URL = 'https://localhost:7267/api';

@Injectable({
  providedIn: 'root',
})
export class SubjectsService {
  constructor(private http: HttpClient) {}

  getSubject() {
    return this.http.get(`${API_URL}/Subject`);
  }

  getSubjectById(id: number) {
    return this.http.get(`${API_URL}/Subject/${id}`);
  }

  postSubject(body: ISubject) {
    return this.http.post(`${API_URL}/Subject`, body);
  }

  putSubject(body: ISubject, id: number) {
    return this.http.put(`${API_URL}/Subject/${id}`, body);
  }

  deleteSubject(id: number) {
    return this.http.delete(`${API_URL}/Subject/${id}`);
  }
}
