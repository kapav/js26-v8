import {Injectable} from '@angular/core'
import {CanDeactivate} from '@angular/router'
import {Observable} from 'rxjs'

// Интерфейс, который необходимо реализовать в компоненте,
// который может отменить перенаправления пользователя в
// случае необходимости.
export interface CanComponentDeactivate {
  // Если метод вернёт true, то перенаправление возможно,
  // false - нет.
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean
}

// Guard для настроек маршрута.
// Guard может работать с объектами, которые реализовали
// интерфейс CanComponentDeactivate.
// Данный класс используется в настройках маршрута во
// phrase-routing.module.ts.
@Injectable()
export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate> {
  canDeactivate(component: CanComponentDeactivate) {
    // Проверяем наличие метода canDeactivate и вызов его.
    return component.canDeactivate ? component.canDeactivate() : true
  }
  
}
