import { Injectable } from '@angular/core';
import axios from 'axios';

export interface User {
  id?: number;
  name: string;
  email: string;
  contact: string;
}

@Injectable({
  providedIn: 'root'
})


export class DataService {
  private apiUrl = 'http://localhost:3000/users';

  constructor() { }

  async CreateUser(user: User): Promise<User> {
    const res = await axios.post<User>(this.apiUrl, user, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return res.data;
  }

  async UpdateUser(id: number, user: User): Promise<void> {
    await axios.put<void>(`${this.apiUrl}/${id}`, user, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  async GetAllUser(): Promise<User[]> {
    const res = await axios.get<User[]>(`${this.apiUrl}`);
    return res.data;
  }

  
}
