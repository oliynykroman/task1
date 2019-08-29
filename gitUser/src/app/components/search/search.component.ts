import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public searchData: Observable<Object>;

  constructor(private userService:UserService) { }

  ngOnInit() {
    this.searchData = this.userService.getUser();
    console.log(this.searchData);
  }

}
