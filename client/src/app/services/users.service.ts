import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from '../models/User';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-type': 'application/json' }),
};

@Injectable()
export class UsersService {
  users: User[] = [];
  baseUrl: string = 'http://127.0.0.1:8000/api';

  constructor(private httpClient: HttpClient) {}

  getUsers() {
    return this.httpClient.get(`${this.baseUrl}/users`);
  }

  addUser(user: User): Observable<User> {
    return this.httpClient.post<User>(
      `${this.baseUrl}/addUser`,
      user,
      httpOptions
    );
  }

  updateUser(user: User): Observable<User> {
    return this.httpClient.put<User>(
      `${this.baseUrl}/updateUser/${user.id}`,
      user,
      httpOptions
    );
  }

  removePost(postId: number): Observable<User> {
    return this.httpClient.delete<User>(
      `${this.baseUrl}/deleteUser/${postId}}`,
      httpOptions
    );
  }
}
