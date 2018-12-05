import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FileUploadModule } from 'ng2-file-upload';

import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { NavheaderComponent } from './navheader/navheader.component';
import { MaterialModule } from "src/app/material-module";
import { ImageUploadComponent } from './image-upload/image-upload.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    NavheaderComponent,
    ImageUploadComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
     MaterialModule,
     FileUploadModule,
     BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
