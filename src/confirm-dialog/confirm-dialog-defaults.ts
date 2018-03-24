import {InjectionToken} from '@angular/core';


export interface WaMatConfirmDialogDefaults
{


	trueButtonTitle?: string,


	falseButtonTitle?: string,

}


export const WA_MAT_CONFIRM_DIALOG_DEFAULTS = new InjectionToken<any>('WA_MAT_CONFIRM_DIALOG_DEFAULTS');
