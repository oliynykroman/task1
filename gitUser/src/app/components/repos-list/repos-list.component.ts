import { Component, OnInit, Input, Output, OnDestroy } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { EventEmitter } from '@angular/core';
import { Repos } from 'src/app/models/repos';
import { User } from 'src/app/models/user';
import { Sort } from '../search/search.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-repos-list',
  templateUrl: './repos-list.component.html',
  styleUrls: ['./repos-list.component.scss']
})

export class ReposListComponent implements OnInit, OnDestroy {

  @Input() item: User;
  @Output() backtoSearch = new EventEmitter();

  public userRepos: Repos[] = [];
  public userFollowers: User = new User();
  public error: string = '';

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
    this.subscription = this.userService.getUserRepos(this.item.repos_url).subscribe((data) => { this.userRepos = data; },
      error => this.error = error.status);

    this.subscription = this.userService.getUserFollowers(this.item.followers_url).subscribe((data) => { this.userFollowers = data },
      error => this.error = error.status);
  }
  backtoSearchClick() {
    this.backtoSearch.emit(true);
  }
  onSortOption(sortDirection: string) {
    if (sortDirection === 'az') {
      this.userRepos.sort((a, b) => {
        return a.name.localeCompare(b.name);
      });
    } else {
      this.userRepos.sort((a, b) => {
        return b.name.localeCompare(a.name); //read about LocalCompare !
      });
    }
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
