import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'http://localhost:3000';

  constructor() { }

  GetAllUsers() {
    return axios.get(`${this.apiUrl}/users`).then(res => res.data);
  }

  GetAllGenders() {
    return axios.get(`${this.apiUrl}/genders`).then(res => res.data);
  }

  AddUser(user: any) {
    return axios.post(`${this.apiUrl}/users`, user).then(res => res.data);
  }

  UpdateUser(id: string, user: any) {
    return axios.put(`${this.apiUrl}/users/${id}`, user).then(res => res.data);
  }

  DeleteUser(id: string) {
    return axios.delete(`${this.apiUrl}/users/${id}`).then(res => res.data);
  }
}
