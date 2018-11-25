import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FileSelectDirective } from 'ng2-file-upload';

import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { NavheaderComponent } from './navheader/navheader.component';
import { MaterialModule } from "src/app/material-module";
import { ImageUploadComponent } from './image-upload/image-upload.component';

@NgModule({
  declarations: [
    AppComponent,
    FileSelectDirective,
    NavheaderComponent,
    ImageUploadComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
     MaterialModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
