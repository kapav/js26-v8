import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import {CanDeactivateGuard} from '../shared/services/can-deactivate.guard'

import {PhraseListComponent} from '../shared/components/phrase-list/phrase-list.component'
import {PhraseDetailComponent} from '../shared/components/phrase-detail/phrase-detail.component'

@NgModule({
  imports: [
    // Определение маршрутов для feature-модуля.
    // Метод forRoot должен использоваться только в AppModule.
    RouterModule.forChild([
      { path: 'phrase', component: PhraseListComponent },
      {
        path: 'phrase/:id',
        component: PhraseDetailComponent,
        canDeactivate: [CanDeactivateGuard]
        // CanDeactivateGuard - проверка возможности
        // перенаправления со PhraseDetailComponent'а на другой
        // компонент.
      }
    ])
  ],
  exports: [RouterModule]
})
export class PhraseRoutingModule {}
