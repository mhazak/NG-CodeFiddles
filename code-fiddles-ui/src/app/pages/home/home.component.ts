import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LOAD_FIDDLES } from 'src/app/services/fiddle/fiddle.actions';
import { FiddleModel } from 'src/app/services/fiddle/fiddle.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  	constructor(private store: Store<{fiddles: FiddleModel[]}>) { }

	fiddles$: Observable<FiddleModel[]> = this.store.select(state => state.fiddles);
	ngOnInit(): void {
		this.store.dispatch(LOAD_FIDDLES({ loading: true }))
	}

}
