import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  base_url = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: Http) { }


  getUsers() {
    return this.http.get(this.base_url).pipe(map((res => res.json())));
  }

  getUser(id) {
    return this.http.get(this.base_url + '/' + id).pipe(map((res => res.json())));
  }

}
