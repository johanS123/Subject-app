import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import IUser from '../models/user.model';

const API_URL = 'https://localhost:7267/api'

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }
  
    getUser() {
      return this.http.get(`${API_URL}/Users`);
    }
  
    postUser(body: IUser) {
      return this.http.post(`${API_URL}/Users`, body);
    }
}
