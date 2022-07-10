import { NgModule } from "@angular/core";

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
	imports: [
		MatButtonModule,
		MatFormFieldModule,
		MatInputModule,
		MatIconModule,
		MatSelectModule
	],
	exports: [
		MatButtonModule,
		MatFormFieldModule,
		MatInputModule,
		MatIconModule,
		MatSelectModule
	],
})

export class MaterialModule {}
