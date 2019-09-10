import './polyfills';

import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DemoMaterialModule} from './material-module';

// import {StepperLabelPositionBottomExample} from './app/stepper-label-position-bottom-example';
import {WizardComponent} from './app/wizard/wizard.component';

import {TemplateEditorComponent} from './app/template-editor/template-editor.component';
import { RuntimeContentComponent } from './app/runtime-content/runtime-content.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    DemoMaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    WizardComponent
  ],
  declarations: [
    WizardComponent,
    TemplateEditorComponent,
    RuntimeContentComponent
  ],
  bootstrap: [WizardComponent],
  providers: []
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);


/**  Copyright 2019 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */