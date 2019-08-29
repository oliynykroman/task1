import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { User } from '../models/user';

const APIURL = 'https://api.github.com/users';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  public getUser(value: string) {
    return this.http.get<User>(`${APIURL}/value`);
  }
  public getUserRepos(user: string) {
    return this.http.get<User>(`${APIURL}/${user}/repos`);
  }
}
