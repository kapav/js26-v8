import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import {PhrasePageComponent} from './phrase-page.component'
import {PhraseListComponent} from '../shared/components/phrase-list/phrase-list.component'
import {PhraseDetailComponent} from '../shared/components/phrase-detail/phrase-detail.component'

@NgModule({
  imports: [
    // Определение маршрутов для feature-модуля.
    // Метод forRoot должен использоваться только в AppModule.
    RouterModule.forChild([
      {
        path: '',
        redirectTo: '/phrase',
        pathMatch: 'full'
      },
      {
        // Чтобы компонент отображался в router-outlet'е
        // PhrasePageComponent'а, а не в AppComponent'е,
        // необходимо выполнить настройку дочерних маршрутов с
        // помощью инициализации свойства children.
        path: 'phrase',
        component: PhrasePageComponent, // Содержит
          // <router-outlet>
        children: [{
          path: '',
          component: PhraseListComponent, // Содержит
            // <router-outlet>
          children: [
            {
              path: ':id',
              component: PhraseDetailComponent
            },
            {
              path: '',
              component: PhraseDetailComponent
            }
          ]
        }]
      }
    ])
  ],
  exports: [RouterModule]
})
export class PhraseRoutingModule {}
