import { CounselorService } from './counselor/counselor.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CounselorComponent } from './counselor/counselor.component';

@NgModule({
  declarations: [
    AppComponent,
    CounselorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [CounselorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
