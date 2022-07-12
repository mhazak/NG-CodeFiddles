import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { SET_AUTH } from 'src/app/services/user.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

	constructor(private store: Store) { }

	loginForm = new FormGroup({
		email: new FormControl('', [Validators.required, Validators.email]),
		password: new FormControl('', [Validators.required, Validators.minLength(6)])
	})

	ngOnInit(): void {
  	}

	onLogin() {
		this.store.dispatch(SET_AUTH({user: {
			email: this.loginForm.value['email'],
			password: this.loginForm.value['password']
		}}))
	}
}
