import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import {AppRoutingModule} from './app-routing.module'
import {PhraseModule} from './phrase-page/phrase.module'
import {AdminModule} from './admin-page/admin.module'

// Сервисы
import {PhraseService} from './shared/services/phrase.service'
import {AuthGuard} from './shared/services/auth.guard'

// Компоненты
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PhraseModule,
    AdminModule
  ],
  providers: [
    PhraseService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
