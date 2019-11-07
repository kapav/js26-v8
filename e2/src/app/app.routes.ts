import {Routes} from '@angular/router'
import {HomePageComponent} from './home-page/home-page.component'
import {PhraseListComponent} from './shared/components/phrase-list/phrase-list.component'
import {PhraseDetailComponent} from './shared/components/phrase-detail/phrase-detail.component'

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomePageComponent
  },
  {
    path: 'phrase',
    component: PhraseListComponent
  },
  {
    path: 'phrase/:id',
    component: PhraseDetailComponent
  }
]
