import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import {CanDeactivateGuard} from '../shared/services/can-deactivate.guard'
import {PhraseDetailResolve} from '../shared/services/phrase-detail-resolve.guard'

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
        // CanDeactivateGuard - проверка возможности
        // перенаправления со PhraseDetailComponent'а на другой
        // компонент.
        canDeactivate: [CanDeactivateGuard],
        // Свойство позволяет определить объект, который будет
        // доступен в данных Activate
        resolve: { phrase: PhraseDetailResolve }
      }
    ])
  ],
  exports: [RouterModule]
})
export class PhraseRoutingModule {}
