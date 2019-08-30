import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Repos } from '../models/repos';
import { RequestOptionsArgs, Http, Headers } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SearchResults } from '../models/searchResults';

const TOKEN = "97f9230719eb8b37313700b88197e6ca10e904e9";
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


  public searchUser(user: string, showOnPage:number = 10) {
    // &per_page=10&page=2
    return this.http.get<SearchResults>(this.createUrl('search/users?q=', user + ' &per_page='+ showOnPage), this.httpOptions);
  }

  public getUserInfo(user: string) {
    return this.http.get<User>(this.createUrl('users/', user), this.httpOptions);
  }
  public getUserRepos(user: string) {
    return this.http.get<Repos>(`${this.apiServer}repos1`);
  }
}
