import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';

import {WaMatConfirmDialogComponent} from './confirm-dialog.component';
import {WaMatConfirmDialog} from './confirm-dialog.service';


@NgModule({
	imports: [
		CommonModule,
		MatDialogModule, MatButtonModule,
	],
	declarations: [
		WaMatConfirmDialogComponent,
	],
	entryComponents: [
		WaMatConfirmDialogComponent,
	],
	providers: [
		WaMatConfirmDialog,
	],
})
export class WaMatConfirmDialogModule {}
