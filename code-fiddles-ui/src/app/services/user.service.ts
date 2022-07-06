import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  	constructor(private http: HttpClient) { }

	createAccount (model: User) {
		this.http.post(environment.backend + '/api/users/create/', model).subscribe(res => {
			console.log({ res });
		}, err => {
			console.log({ err });
		})
	}

	login (model: User) {

		this.http.post(environment.backend + '/api/users/login/', model).subscribe(res => {
			console.log({res});
		}, err => {
			console.log({err});
		})

	}

	initAuthListener () {

	}
}
