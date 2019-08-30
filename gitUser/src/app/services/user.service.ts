import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { User } from '../models/user';
import { Repos } from '../models/repos';
import { RequestOptionsArgs, Http, Headers } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const TOKEN = "1c5a360c59b92c5849e13de1e016532e708b5e8c";
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
      'Content-Type':  'application/json',

    })
  };

  constructor(private http: HttpClient) {

   
  }

  createUrl(endPoint): string {
    let url = this.apiServer + endPoint;   
    return url;
  }


  public getUser(user: string, options?: RequestOptionsArgs){
    return this.http.post<User>(this.createUrl('/users/?q=' + user), user, this.httpOptions);
  }
  public getUserRepos(user: string) {
     return this.http.get<Repos>(`${this.apiServer}repos1`);
  }
}
