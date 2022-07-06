import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, take } from 'rxjs';

import * as fromUser from './user.reducer';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {

	constructor(private store: Store<fromUser.State>) {}

  	canActivate(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

		return this.store.select(fromUser.getIsAuth).pipe(take(1));
	}

}
