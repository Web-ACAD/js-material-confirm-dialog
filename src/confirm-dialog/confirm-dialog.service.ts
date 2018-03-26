import {Injectable, Inject, Optional} from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';

import {WaMatConfirmDialogComponent, WaMatConfirmDialogData} from './confirm-dialog.component';
import {WaMatConfirmDialogDefaults, WA_MAT_CONFIRM_DIALOG_DEFAULTS} from './confirm-dialog-defaults';


export declare interface WaMatConfirmDialogOptions
{
	title?: string,
	trueButtonTitle?: string,
	falseButtonTitle?: string,
}


const TRUE_BUTTON_TITLE_FALLBACK = 'Yes';
const FALSE_BUTTON_TITLE_FALLBACK = 'No';


@Injectable()
export class WaMatConfirmDialog
{


	private defaults: WaMatConfirmDialogDefaults;


	constructor(
		private $dialog: MatDialog,
		@Inject(WA_MAT_CONFIRM_DIALOG_DEFAULTS) @Optional() defaults: WaMatConfirmDialogDefaults,
	) {
		this.defaults = defaults || {};
	}


	public open(message: string, options: WaMatConfirmDialogOptions = {}): MatDialogRef<WaMatConfirmDialogComponent>
	{
		const data: WaMatConfirmDialogData = {
			message: message,
			trueButtonTitle: options.trueButtonTitle || this.defaults.trueButtonTitle || TRUE_BUTTON_TITLE_FALLBACK,
			falseButtonTitle: options.falseButtonTitle || this.defaults.falseButtonTitle || FALSE_BUTTON_TITLE_FALLBACK,
		};

		if (typeof options.title !== 'undefined') {
			data.title = options.title;
		}

		return this.$dialog.open<WaMatConfirmDialogComponent, WaMatConfirmDialogData>(WaMatConfirmDialogComponent, {
			data: data,
		});
	}

}
