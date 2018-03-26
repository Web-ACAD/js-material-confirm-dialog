import {Component, Inject, ChangeDetectionStrategy} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';


export declare interface WaMatConfirmDialogData
{
	message: string,
	trueButtonTitle: string,
	falseButtonTitle: string,
	title?: string,
}


@Component({
	selector: 'wa-mat-confirm-dialog',
	templateUrl: './confirm-dialog.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WaMatConfirmDialogComponent
{


	constructor(
		@Inject(MAT_DIALOG_DATA) public data: WaMatConfirmDialogData,
	) {}

}
