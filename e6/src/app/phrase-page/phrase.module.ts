import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {PhraseRoutingModule} from './phrase-routing.module'

import {PhraseListComponent} from '../shared/components/phrase-list/phrase-list.component'
import {PhraseDetailComponent} from '../shared/components/phrase-detail/phrase-detail.component'

@NgModule({
  declarations: [
    PhraseListComponent,
    PhraseDetailComponent
  ],
  imports: [
    CommonModule,
    PhraseRoutingModule // Настройки маршрутизации для модуля
      // PhraseModule.
  ]
})
export class PhraseModule {}
