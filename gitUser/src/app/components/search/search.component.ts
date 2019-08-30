import { Component, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';
import { EventEmitter } from '@angular/core';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Output() userName = new EventEmitter();

  public searchResults: Observable<Object>;


  constructor(private userService: UserService) { }

  ngOnInit() {

  }
  onSearch(value: string) {
    this.searchResults = this.userService.getUser(value);
  }
  // showUserRepos(userlogin: string) {
  //   this.userName.emit(userlogin);
  // }
}
