import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import ISubject from '../models/subject.model';

const API_URL = 'https://localhost:7267/api'

@Injectable({
  providedIn: 'root'
})
export class SubjectsService {

  constructor(private http: HttpClient) { }

  getSubject() {
    return this.http.get(`${API_URL}/Subject`);
  }

  postSubject(body: ISubject) {
    return this.http.post(`${API_URL}/Subject`, body);
  }
}
