import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { FIDDLE_ADDED, LOAD_FIDDLES } from 'src/app/services/fiddle/fiddle.actions';
import { FiddleModel } from 'src/app/services/fiddle/fiddle.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  	constructor(private store: Store<{fiddles: FiddleModel[]}>) { }

	fiddles$: Observable<FiddleModel[]> = this.store.select(state => state.fiddles);

	onSubmit() {
		this.store.dispatch(FIDDLE_ADDED({ fiddle: { name: 'new', language: 'JavaScript', code: 'console.log(\"Hello World!\");' }}))
	}
	ngOnInit(): void {
		this.store.dispatch(LOAD_FIDDLES({ loading: true }))
	}

}
