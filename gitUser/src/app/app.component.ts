import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public userHasRepos: boolean = false;

  public userName:string = '';

  getUserName(userName: string) {
    this.userName = userName;
  }
}
