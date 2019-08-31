import { Component, OnInit, Input, Output } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { EventEmitter } from '@angular/core';
import { Repos } from 'src/app/models/repos';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-repos-list',
  templateUrl: './repos-list.component.html',
  styleUrls: ['./repos-list.component.scss']
})

export class ReposListComponent implements OnInit {

  @Input() item: User;
  @Output() backtoSearch = new EventEmitter();

  public userRepos: Repos[] = [];
  public userFollowers: User = new User();
  public error: string = '';
  public showOnPage: string[] = [
    'asc', 'desc'
  ]

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUserRepos(this.item.repos_url).subscribe((data) => { this.userRepos = data; },
      error => this.error = error.status);

    this.userService.getUserFollowers(this.item.followers_url).subscribe((data) => { this.userFollowers = data },
      error => this.error = error.status);
  }
  backtoSearchClick() {
    this.backtoSearch.emit(true);
  }
  onSelectOption(sortDirection: string) {
    if (sortDirection === 'asc') {
      this.userRepos.sort((a, b) => {
        return a.name.localeCompare(b.name);
      });
      console.log(this.userRepos);
    } else {
      this.userRepos.sort((a, b) => {
        return b.name.localeCompare(a.name); //read about LocalCompare !
      });
      console.log(this.userRepos);
    }
  }
}
