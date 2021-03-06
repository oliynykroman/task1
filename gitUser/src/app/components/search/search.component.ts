import { Component, OnInit, Output, OnDestroy } from '@angular/core';
import { Subscription, Subject } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { EventEmitter } from '@angular/core';
import { SearchResults } from 'src/app/models/searchResults';
import { User } from 'src/app/models/user';

export class Sort { //for now can be here, but in general will be better if made form this sort, maybe pipe
  public name: string;
  public value: string;
}

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {

  @Output() fullUserData = new EventEmitter();

  public search: Subject<string> = new Subject<string>();
  public searchResults: SearchResults = new SearchResults();
  public error: string = '';
  public userData: User[] = [];

  public selectedOption: number;
  public searchValue: string = ''
  public showOnPage: number[] = [
    10, 15, 20, 25, 30
  ];

  public sort: Sort[] = [
    {
      name: 'a->z',
      value: 'az'
    },
    {
      name: 'z->a',
      value: 'za'
    },
  ];

  private subscription: Subscription;

  constructor(private userService: UserService) { }

  ngOnInit() {

  }

  onSearch(value: string, count?: number) {
    this.searchValue = value;
    if (this.searchValue) {
      this.subscription = this.userService.searchUser(value, count).subscribe((data) => {
        this.searchResults = data;
        this.userData = [];
        // gtting each user full information
        for (let i = 0; i < this.searchResults.items.length; i++) {
          this.getUserInfo(this.searchResults.items[i].login);
        }
      },
        error => this.error = error.status);

    }
    else {
      this.searchResults = new SearchResults();
    }
  }

  getUserInfo(userName: string) {
    this.subscription = this.userService.getUserInfo(userName).subscribe((data) => this.userData.push(data),
      error => this.error = error.status);
  }

  // select list count
  onSelectOption(count: number) {
    this.onSearch(this.searchValue, count);
  }
  onSortOption(sortDirection: string) {
    console.log(sortDirection);
    if (sortDirection === 'az') {
      this.userData.sort((a, b) => {
        return a.name.localeCompare(b.name);
      });
    } else {
      this.userData.sort((a, b) => {
        return b.name.localeCompare(a.name); //read about LocalCompare !
      });
    }
  }

  showUserReposClick(item: User) {
    this.fullUserData.emit(item);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
