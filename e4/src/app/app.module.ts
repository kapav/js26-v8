import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module'
import {PhraseModule} from './phrase-page/phrase.module'

// Сервисы
import {PhraseService} from './shared/services/phrase.service'

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
    PhraseModule
  ],
  providers: [PhraseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
