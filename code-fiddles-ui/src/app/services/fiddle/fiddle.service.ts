import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import * as fromRoot from '../../app.reducer';
import * as FiddleActions from './fiddle.actions';

import { environment } from 'src/environments/environment';
import { Store } from '@ngrx/store';
import { FiddleModel } from './fiddle.model';

@Injectable({
  providedIn: 'root'
})
export class FiddleService {

  	constructor(private http: HttpClient, private store: Store<fromRoot.State>) { }

	getFiddles() {
		return this.http.get(environment.backend + '/api/fiddles/');
	}

	getFiddle(id: string) {
		this.http.get(environment.backend + '/api/fiddles/' + id).subscribe(res => {
			console.log({res});
		});
	}

	getFiddlesByUser(userid: string) {
		this.http.get(environment.backend + '/api/fiddles/user/' + userid).subscribe(res => {
			console.log({res});
		});
	}

	createFiddle(model: FiddleModel) {
		return this.http.post(environment.backend + '/api/fiddles/create/', model)
	}

	updateFiddle(model) {
		this.http.put(environment.backend + '/api/fiddles/update/', model).subscribe(res => {
			console.log({res});
		}, err => {
			console.log({err});
		})
	}

	removeFiddle(id: string) {
		this.http.delete(environment.backend + '/api/fiddles/remove/' + id).subscribe(res => {
			console.log({res});
		});
	}
}
