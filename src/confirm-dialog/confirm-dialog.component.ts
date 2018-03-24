import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

import {WaMatConfirmDialogOptions} from './confirm-dialog.service';


@Component({
	selector: 'wa-mat-confirm-dialog',
	templateUrl: './confirm-dialog.component.html',
})
export class WaMatConfirmDialogComponent
{


	constructor(
		@Inject(MAT_DIALOG_DATA) public data: WaMatConfirmDialogOptions,
	) {}

}
