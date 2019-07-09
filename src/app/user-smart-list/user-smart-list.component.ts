import { Component, OnInit } from '@angular/core';
import { UserDataService } from "../services/user-data.service";

@Component({
  selector: 'app-user-smart-list',
  templateUrl: './user-smart-list.component.html',
  styleUrls: ['./user-smart-list.component.scss']
})
export class UserSmartListComponent implements OnInit {

  lstUser: [];
  userDataModel: any;

  constructor(private userDataService: UserDataService) {
    this.userDataModel = {
      name: '',
      username: '',
      email: '',
      street: '',
      suite: '',
      city: '',
      zipcode: '',
      phone: '',
      website: '',
      companyname: '',
      catchPhrase: '',
      bs: ''
    };
  }

  ngOnInit() {

    this.userDataService.getUsers().subscribe(data => {
      this.lstUser = data;
    });

  }

  showDetail(data) {
    this.userDataModel.name = data.name;
    this.userDataModel.username = data.username;
    this.userDataModel.street = data.address.street;
    this.userDataModel.city = data.address.city;
    this.userDataModel.email = data.email;
    this.userDataModel.suite = data.address.suite;
    this.userDataModel.zipcode = data.address.zipcode;
    this.userDataModel.phone = data.phone;
    this.userDataModel.website = data.website;
    this.userDataModel.companyname = data.company.name;
    this.userDataModel.catchPhrase = data.company.catchPhrase;
    this.userDataModel.bs = data.company.bs;
  }

}
