import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LllComponent } from './lll/lll.component';
import { DevComponent } from './dev/dev.component';
import { SkyComponent } from './sky/sky.component';
import { BlueComponent } from './blue/blue.component';
import { RedComponent } from './red/red.component';
import { WhiteComponent } from './white/white.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LllComponent,
    DevComponent,
    SkyComponent,
    BlueComponent,
    RedComponent,
    WhiteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
