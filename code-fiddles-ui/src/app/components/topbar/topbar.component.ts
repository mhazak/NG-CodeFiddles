import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/services/user.service';

import * as fromRoot from '../../app.reducer';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {

  	constructor(private userService: UserService, private store: Store<fromRoot.State>) { }

	isAuth$: Observable<boolean>;

  	ngOnInit(): void {
		this.isAuth$ = this.store.select(fromRoot.getIsAuthenticated);
  	}

	onLogout() {
		this.userService.logout();
	}

}
