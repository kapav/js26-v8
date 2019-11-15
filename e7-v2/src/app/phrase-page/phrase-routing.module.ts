import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import {PhraseListComponent} from '../shared/components/phrase-list/phrase-list.component'
import {PhraseDetailComponent} from '../shared/components/phrase-detail/phrase-detail.component'

@NgModule({
  imports: [
    // Определение маршрутов для feature-модуля.
    // Метод forRoot должен использоваться только в AppModule.
    RouterModule.forChild([
      { path: 'phrase', component: PhraseListComponent },
      { path: 'phrase/:id', component: PhraseDetailComponent }
    ])
  ],
  exports: [RouterModule]
})
export class PhraseRoutingModule {}
