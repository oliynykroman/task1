import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public searchResults: Observable<Object>;
  public userRepos: Observable<Object>

  constructor(private userService: UserService) { }

  ngOnInit() {
   
  }
  onSearch (value:string){
    this.searchResults= this.userService.getUser(value);
  }
  viewUserRepos(userLogin: string) {
    this.userRepos = this.userService.getUserRepos(userLogin);
  }
}
