import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../app/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private usersUrl: string;

  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8080';
  }

  public findAll(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl+"/users");
  }

  public save(user: User) {
    return this.http.post<User>(this.usersUrl+"/users", user);
  }
}
