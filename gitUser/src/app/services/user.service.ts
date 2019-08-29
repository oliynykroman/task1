import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
const   APIURL = 'https://api.github.com/users';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  
  public getUser(){
    return this.http.get(`${APIURL}?per_page=10`)
  }
}
