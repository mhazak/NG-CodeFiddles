import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent implements OnInit {

  	constructor(private userService: UserService) { }

  	createAccountForm = new FormGroup({
		email: new FormControl('', [Validators.email, Validators.required]),
		password: new FormControl('', Validators.required)
	})

  	ngOnInit(): void {
  	}

	onCreateAccount () {
		this.userService.createAccount({
			email: this.createAccountForm.value['email'],
			password: this.createAccountForm.value['password'],
		})
	}

}
