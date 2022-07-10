import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FiddleService {

  	constructor(private http: HttpClient) { }

	getFiddles() {
		this.http.get(environment.backend + '/api/fiddles/').subscribe(res => {
			console.log({res});
		});
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

	createFiddle() {
		const model = {};
		this.http.post(environment.backend + '/api/fiddles/create/', model).subscribe(res => {
			console.log({res});
		}, err => {
			console.log({err});
		})
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
