import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { User } from '../models/user';
import { Repos } from '../models/repos';
import { RequestOptionsArgs, Http, Headers } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const TOKEN = "198c6def89e39704bebad47edc3fb74f41c1f53f";
const APIURL = 'https://api.github.com/users';
// const APIURL = 'http://localhost:3000/';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private headers: Headers = new Headers();
  private requestOptions: RequestOptionsArgs = {};
  private apiServer: string = "https://api.github.com";

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'token ' + TOKEN
    })
  };

  constructor(private http: HttpClient) {


  }

  createUrl(endPoint): string {
    let url = this.apiServer + endPoint;
    return url;
  }


  public getUser(user: string, options?: RequestOptionsArgs) {
    return this.http.get<User>(this.createUrl('/users/' + user), this.httpOptions);
  }
  public getUserRepos(user: string) {
    return this.http.get<Repos>(`${this.apiServer}repos1`);
  }
}
