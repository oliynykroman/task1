import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { of} from 'rxjs';
import { User } from '../models/user';

const APIURL = 'https://api.github.com/users';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  public getUser(user: string) {
    return this.http.get<User>(`${APIURL}/${user}`).pipe(
      catchError((error) => {
        console.log('eror ', error);
        return of(false);
      })
    )
  }
  public getUserRepos(user: string) {
    return this.http.get<User>(`${APIURL}/${user}/repos`).pipe(
      catchError((error) => {
        console.log('eror ', error);
        return of(false);
      })
    );
  }
}
