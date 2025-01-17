import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import IRegistration from '../models/registration.model';

const API_URL = 'https://localhost:7267/api';

@Injectable({
  providedIn: 'root',
})
export class RegistrationService {
  constructor(private http: HttpClient) {}

  getRegistration() {
    return this.http.get(`${API_URL}/Registration`);
  }

  getRegistrationById(id: number) {
    return this.http.get(`${API_URL}/Registration/${id}`);
  }

  postRegistration(body: IRegistration) {
    return this.http.post(`${API_URL}/Registration`, body);
  }

  putRegistration(body: IRegistration, id: number) {
    return this.http.put(`${API_URL}/Registration/${id}`, body);
  }

  deleteRegistration(id: number) {
    return this.http.delete(`${API_URL}/Registration/${id}`);
  }
}
