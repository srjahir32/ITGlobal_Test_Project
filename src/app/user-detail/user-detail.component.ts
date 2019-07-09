import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { UserDataService } from "../services/user-data.service";


@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  userDataModel: any;

  constructor(private userDataService: UserDataService, private route: ActivatedRoute) {

    this.userDataModel = {
      name: '',
      username: '',
      street: '',
      city: '',
      email: '',
      suite: '',
      zipcode: '',
      phone: '',
      website: '',
      companyname: '',
      catchPhrase: '',
      bs: ''
    };

  }

  ngOnInit() {
    const user_id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.userDataService.getUser(user_id).subscribe(data => {
      this.userDataModel = {
        name: data.name,
        username: data.username,
        street: data.address.street,
        city: data.address.city,
        email: data.email,
        suite: data.address.suite,
        zipcode: data.address.zipcode,
        phone: data.phone,
        website: data.website,
        companyname: data.company.name,
        catchPhrase: data.company.catchPhrase,
        bs: data.company.bs
      }
    });

  }

}
