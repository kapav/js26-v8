import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import {FormsModule} from '@angular/forms'

import {AppRoutingModule} from './app-routing.module'
import {LoginRoutingModule} from './login-page/login-routing.module'
import {PhraseModule} from './phrase-page/phrase.module'
import {AdminModule} from './admin-page/admin.module'

// Сервисы
import {PhraseService} from './shared/services/phrase.service'

// Компоненты
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    LoginRoutingModule,
    PhraseModule,
    AdminModule
  ],
  providers: [
    PhraseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
