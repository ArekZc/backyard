import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonGroupComponent } from './button-group.component';
import { ButtonComponent } from './button.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    ButtonGroupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
