import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ResultComponent } from './result/result.component';
import { ButtonComponent } from './button/button.component';
import { SwitchComponent } from './switch/switch.component';
import { NumberPipe } from './number.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ResultComponent,
    ButtonComponent,
    SwitchComponent,
    NumberPipe
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
