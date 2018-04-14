import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DesignOneComponent } from './design-one/design-one.component';
import { DataService } from './data.service';
import { EditableComponent } from './editable/editable.component';
import { DesignTwoComponent } from './design-two/design-two.component';


@NgModule({
  declarations: [
    AppComponent,
    DesignOneComponent,
    EditableComponent,
    DesignTwoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
