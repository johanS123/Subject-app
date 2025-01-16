import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import IStudent from '../models/student.model';

const API_URL = 'https://localhost:7267/api'

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private http: HttpClient) { }
  
  getStudent() {
    return this.http.get(`${API_URL}/Student`);
  }

  postStudent(body: IStudent) {
    return this.http.post(`${API_URL}/Student`, body);
  }
}
