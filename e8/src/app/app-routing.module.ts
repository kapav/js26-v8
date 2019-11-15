import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import {HomePageComponent} from './home-page/home-page.component'

// В данном примере настройки маршрутизации выделены в
// отдельный модуль.
@NgModule({
  imports: [RouterModule.forRoot([
    {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
    },
    { path: 'home', component: HomePageComponent }
  ])],
  exports: [RouterModule] // Делаем re-export модуля для
    // использования директив при маршрутизации.
})
export class AppRoutingModule { }
