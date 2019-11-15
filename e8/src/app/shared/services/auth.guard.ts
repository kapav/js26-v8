import { Injectable  } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import {AuthService} from './auth.service'

/*
    Guard - механизм для выполнения проверок перед активацией
    и деактивацией маршрута.
    CanActivate - Определяет возможность активации маршрута.
    CanActivateChild - Определяет возможность активации
    дочерних маршрутов текущего маршрута.
    CanDeactivate - Определяет можно ли уйти с текущего
    маршрута.
    CanLoad - Определяет может ли модуль загрузиться с использованием lazy loading.
    Установка объектов Guard происходит при настройке
    маршрутизации.
    В данном примере Guard используется в файле
    /admin-page/admin-routing.module.ts.
    Также, для AuthGuard необходимо установить провайдер (в
    данном примере провайдер установлен в app.module.ts).
*/
@Injectable()
export class AuthGuard implements CanActivate {
    // Observable<boolean>|Promise<boolean>|boolean -
    // Возможные результаты работы метода.
    // Если возвращённое значение true, то маршрут будет
    // активирован, иначе - нет.
  constructor(
    private router: Router,
    private authService: AuthService
  ) {}
  // ActivatedRouteSnapshot - информация о маршруте,
  // связанным с загруженым компонентом.
  // RouterStateSnapshot - состояние маршрута в определённый
  // отрезок времени.
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) {
    if (this.authService.isLoggedIn) {
      return true
    } else {
      this.authService.redirectUrl = state.url
      this.router.navigate(['/login'])
      return false
    }
  }
  
}
