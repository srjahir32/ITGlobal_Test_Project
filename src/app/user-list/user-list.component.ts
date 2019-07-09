import { Component, OnInit } from '@angular/core';
import { UserDataService } from "../services/user-data.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  lstUser: [];

  constructor(private userDataService: UserDataService, private router: Router) { }

  ngOnInit() {

    this.userDataService.getUsers().subscribe(data => {
      this.lstUser = data;
    });

  }

  gotoDetail(data) {
    this.router.navigate(['/userdetail', data.id]);
  }

}
