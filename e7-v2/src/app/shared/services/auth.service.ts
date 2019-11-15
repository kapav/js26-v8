import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs'

import {delay, tap} from 'rxjs/operators'

@Injectable()
export class AuthService {

  isLoggedIn: boolean = false

  // URL для перенаправления после авторизации
  redirectUrl: string

  constructor() {}

  login(login: string, password: string): Observable<boolean> {
    // Создание Observable объекта.
    return of(true).pipe( // Добавление элементов в последовательность объекта.
      delay(1000), // Задержка на 1 с.
      tap(() => { // Выполнение действия для каждого элемента в
          // последовательности.
          if (login === 'admin' && password === 'qwerty') { this.isLoggedIn = true }
        return this.isLoggedIn
      })
    )
  }

  logout(): void {
    this.isLoggedIn = false
  }

}
