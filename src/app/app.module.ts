import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { ChecklistoneComponent } from './checklistone/checklistone.component';
import { ChecklisttwoComponent } from './checklisttwo/checklisttwo.component';
import { ChecklistthreeComponent } from './checklistthree/checklistthree.component';
@NgModule({
  declarations: [
    AppComponent,
    ChecklistoneComponent,
    ChecklisttwoComponent,
    ChecklistthreeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
