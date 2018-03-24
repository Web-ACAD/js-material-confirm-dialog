[![NPM version](https://img.shields.io/npm/v/@webacad/material-confirm-dialog.svg?style=flat-square)](https://www.npmjs.com/package/@webacad/material-confirm-dialog)
[![Build Status](https://img.shields.io/travis/Web-ACAD/js-material-confirm-dialog.svg?style=flat-square)](https://travis-ci.org/Web-ACAD/js-material-confirm-dialog)

# WebACAD/MaterialConfirmDialog

Angular service for creating confirm dialogs in @angular/material

## Installation

```bash
$ npm install --save @webacad/material-confirm-dialog
```

or with yarn

```bash
$ yarn add @webacad/material-confirm-dialog
```

## Register module

```typescript
import {NgModule} from '@angular/core';
import {WaMatConfirmDialogModule} from '@webacad/material-confirm-dialog';

@NgModule({
    imports: [
        WaMatConfirmDialogModule,
    ],
})
export class AppModule {}
```

## Basic usage

```typescript
import {Component} from '@angular/core';
import {WaMatConfirmDialog} from '@webacad/material-confirm-dialog';

@Component({...})
export class MyComponent
{
    
    constructor(
        private confirmDialog: WaMatConfirmDialog,
    ) {}
    
    public openConfirmDialog(): void
    {
        const cd = this.confirmDialog.open('Are you sure?');
        
        cd.afterClosed().subscribe((result: boolean) => {
            if (result) {
                alert('Clicked on "yes"');
            } else {
                alert('Clicked on "no"');
            }
        });
    }
    
}
```

## Customize dialog

```typescript
confirmDialog.open('Are you sure?', {
    title: 'Important decision',
    trueButtonTitle: 'yes, I\'m sure',
    falseButtonTitle: 'No, I don\'t want to continue',
});
```

## Change default titles for buttons

Default titles for buttons are "Yes" and "No". You can override them either for each confirm dialog or globally.

First create service provider:

```typescript
import {Injectable} from '@angular/core';
import {WaMatConfirmDialogDefaults} from '@webacad/material-confirm-dialog';

@Injectable()
export class UnsureConfirmDialogDefaults implements WaMatConfirmDialogDefaults
{
    
    
    public trueButtonTitle: string = 'Maybe yes';
    
    public falseButtonTitle: string = 'Maybe no';
    
}
```

Then register it with `WaMatConfirmDialogModule`:

```typescript
import {NgModule} from '@angular/core';
import {WaMatConfirmDialogModule, WA_MAT_CONFIRM_DIALOG_DEFAULTS} from '@webacad/material-confirm-dialog';

@NgModule({
    imports: [
        WaMatConfirmDialogModule,
    ],
    providers: [
        {
            provide: WA_MAT_CONFIRM_DIALOG_DEFAULTS,
            useClass: UnsureConfirmDialogDefaults,
        },
    ],
})
export class AppModule {}
```
