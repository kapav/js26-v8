import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

import {AuthService} from '../shared/services/auth.service'

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  password: string
  userLogin: string
  message: string

  constructor(
    private router: Router,
    private authService: AuthService
  ) {
    this.setMessage()
  }

  ngOnInit() {}

  setMessage() {
    this.message = this.authService.isLoggedIn ? 'Вход выполнен.' : 'Произошёл выход.'
  }

  login() {
    this.message = 'Попытка входа...'
    this.authService.login(this.userLogin, this.password).subscribe(() => {
      this.setMessage()
      if (this.authService.isLoggedIn) {
        // Получение строки для перенаправления от сервиса.
        // Если строки нет, то перенаправляем на страницу по умолчанию.
        const redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/admin'
        this.router.navigate([redirect]) // Перенаправление пользователя.
      }
    })
  }

  logout() {
    this.authService.logout()
    this.setMessage()
  }

}
