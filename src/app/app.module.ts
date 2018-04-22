import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DataService } from './data.service';
import { EditableComponent } from './editable/editable.component';

import { NgxJsonViewerModule } from 'ngx-json-viewer';
import { DragulaModule } from 'ng2-dragula';
import { NotesComponent } from './notes/notes.component';

@NgModule({
  declarations: [
    AppComponent,
    EditableComponent,
    NotesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxJsonViewerModule,
    DragulaModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
