import { Component } from '@angular/core';
import { User } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public userData: User = new User();
  public hasRepos: boolean = false;

  fullUserData(fullUserData: User) {
    // check if user has repos
    if (fullUserData.public_repos) {
      this.hasRepos = true;
      this.userData = fullUserData;
    }
  }
}
