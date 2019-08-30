import { Component, OnInit, Input } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Repos } from 'src/app/models/repos';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-repos-list',
  templateUrl: './repos-list.component.html',
  styleUrls: ['./repos-list.component.scss']
})

export class ReposListComponent implements OnInit {

  @Input() item: User;

  public userRepos: Repos;
  public error: string = '';

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUserRepos(this.item.repos_url).subscribe((data) => { this.userRepos = data; console.log(this.userRepos) },
      error => this.error = error.status);
  }
}
