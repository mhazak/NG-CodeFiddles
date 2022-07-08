import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { environment } from 'src/environments/environment';
import { User } from './user.model';
import * as fromRoot from '../app.reducer'
import * as userActions from './user.actions';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  	constructor(private http: HttpClient, private store: Store<fromRoot.State>, private router: Router) { }

	createAccount (model: User) {
		this.http.post(environment.backend + '/api/users/create/', model).subscribe(res => {
			console.log({ res });
		}, err => {
			console.log({ err });
		})
	}

	login (model: User) {

		this.http.post(environment.backend + '/api/users/login/', model).subscribe((res: any) => {
			if (res.success) {
				this.store.dispatch(new userActions.SetAuthenticated());
			}
			console.log({res});
		}, err => {
			console.log({err});
		})

	}

	logout () {
		this.store.dispatch(new userActions.SetUnauthenticated())
	}

	initAuthListener () {
		this.store.dispatch(new userActions.CheckAuthenticated());
		this.store.select(fromRoot.getIsAuthenticated).subscribe(isAuthenticated => {
			this.router.navigate([isAuthenticated ? '/' : '/login'])
		})
	}
}
