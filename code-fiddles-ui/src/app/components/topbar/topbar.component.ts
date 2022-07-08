import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {

  	constructor(private userService: UserService) { }

  	ngOnInit(): void {
  	}

	onLogout() {
		this.userService.logout();
	}

}
