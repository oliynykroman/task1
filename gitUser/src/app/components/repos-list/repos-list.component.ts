import { Component, OnInit, Input } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Repos } from 'src/app/models/repos';

@Component({
  selector: 'app-repos-list',
  templateUrl: './repos-list.component.html',
  styleUrls: ['./repos-list.component.scss']
})

export class ReposListComponent implements OnInit {

  @Input() item: string;

  public userRepos: Repos;
  public error:string = '';

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUserRepos(this.item).subscribe((data) => this.userRepos = data,
    error => this.error = error.status );
  }
}
