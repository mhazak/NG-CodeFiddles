import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coding',
  templateUrl: './coding.component.html',
  styleUrls: ['./coding.component.scss']
})
export class CodingComponent implements OnInit {

	constructor() { }

	ngOnInit(): void {
		console.log('funguje!');
	}

	editorOptions = { theme: 'vs-dark', language: 'javascript' };
	code: string = 'function x() { \nconsole.log("Hello world");\n}';
}
