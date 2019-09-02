import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Repos } from '../models/repos';
import { RequestOptionsArgs, Http, Headers } from '@angular/http';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { SearchResults } from '../models/searchResults';
import { throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

 const TOKEN = "9e6d85a2efc83b2b9782f99f6888af3556a6d7d4";
const APIURL = 'https://api.github.com/';

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

  createUrl(endPoint, data): string {
    let url = this.apiServer + '/' + endPoint + data;
    return url;
  }


  public searchUser(user: string, showOnPage: number = 10) {
    // &per_page=10&page=2
    return this.http.get<SearchResults>(this.createUrl('search/users?q=', user + ' &per_page=' + showOnPage), this.httpOptions);
  }

  public getUserInfo(user: string) {
    return this.http.get<User>(this.createUrl('users/', user), this.httpOptions);
  }
  public getUserFollowers(followersoUrl: string) {
    return this.http.get<User>(followersoUrl, this.httpOptions);
  }
  public getUserRepos(repoUrl: string) {
    return this.http.get<Repos[]>(repoUrl, this.httpOptions);
  }
}
