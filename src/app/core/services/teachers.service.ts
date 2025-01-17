import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import ITeacher from '../models/teacher.model';

const API_URL = 'https://localhost:7267/api';

@Injectable({
  providedIn: 'root',
})
export class TeachersService {
  constructor(private http: HttpClient) {}

  getTeacher() {
    return this.http.get(`${API_URL}/Teacher`);
  }

  getTeacherById(id: number) {
    return this.http.get(`${API_URL}/Teacher/${id}`);
  }

  postTeacher(body: ITeacher) {
    return this.http.post(`${API_URL}/Teacher`, body);
  }

  putTeacher(body: ITeacher, id: number) {
    return this.http.put(`${API_URL}/Teacher/${id}`, body);
  }

  deleteTeacher(id: number) {
    return this.http.delete(`${API_URL}/Teacher/${id}`);
  }
}
