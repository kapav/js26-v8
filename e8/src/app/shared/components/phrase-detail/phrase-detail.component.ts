import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, ParamMap} from '@angular/router'

import {Phrase} from '../../interfaces/phrase'
import {CanComponentDeactivate} from '../../services/can-deactivate.guard'
import {PhraseService} from '../../services/phrase.service'

@Component({
  selector: 'app-phrase-detail',
  templateUrl: './phrase-detail.component.html',
  styleUrls: ['./phrase-detail.component.scss']
})
export class PhraseDetailComponent implements OnInit, CanComponentDeactivate {

  phrase: Phrase
  // Поля, в которые будут скопированы значения для
  // редактирования.
  editValue: string
  editLanguage: string

  // ActivatedRoute - содержит о маршруте информацию,
  // связанную с компонентом, который загружен в outlet.
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private phraseService: PhraseService
  ) {}

  ngOnInit() {
    // paramMap - словарь параметров текущего маршрута. Данное
    // свойство является Observable объектом. Если параметры
    // будут изменены - произойдёт событие, и компонент узнает
    // об изменениях.
    // OBSERVABLE PARAMMAP
    // forEach - устанавливаем обработчик на каждае изменение
    // paramMap.
    this.activatedRoute.paramMap
      .forEach((paramMap: ParamMap) => {
      const id = +paramMap.get('id') // Приводим значение
      this.phraseService // параметра id к типу number.
        .getPhrase(id) // Обращаемся к сервису и запрашиваем
          // фразу по id. Получаем Promise.
        .then(result => {
          this.phrase = result
          this.editValue = this.phrase.value
          this.editLanguage = this.phrase.language
        }) //  Как только
          // Promise перейдёт в состояние resolved присваиваем
          // его значение свойству phrase.
    })
    // SNAPSHOT
    // Получение начального значения параметра id.
    /* let id = +this.activatedRoute.snapshot.paramMap.get('id')
    this.phraseService
      .getPhrase(id)
      .then(result => this.phrase = result) */
  }

  // Метод для сохранения изменений, сделанных пользователем.
  save() {
    this.phrase.value = this.editValue
    this.phrase.language = this.editLanguage
    this.goToPhraseList()
  }

  goToPhraseList() {
    let pId = this.phrase ? this.phrase.id : null
    // Объект в массиве с сегментами пути расценивается как
    // факультативные параметры. В адресной строке
    // факультативные параметры будут разделены точкой с
    // запятой.
    // Использование относительного пути при перенаправлении
    // пользователя.
    // «../» - подняться на уровень выше
    this.router.navigate(['../', {
        id: pId,
        param1: 'test',
        param2: 123 
      }],
      {
        relativeTo: this.activatedRoute
      }
    ) // Перенаправляет
      // пользователя на PhraseListComponent.
  }

  // Метод для проверки возможности перенаправления
  // пользователя на другой маршрут.
  // Если метод возвращает true, то перенаправление возможно.
  // Если метод вернёт false, то пользователь получит
  // уведомление с просьбой подтвердить переход.
  // Данный метод будет испоьзоваться при работе с
  // CanDeactivateGuard'ом
  // (shared/services/can-deactivate.guard.ts).
  canDeactivate(): Promise<boolean> | boolean {
    if (!this.phrase) {
      return true
    }
    if (this.phrase.value === this.editValue
      && this.phrase.language === this.editLanguage) {
      return true
    }
    return confirm('Вы не сохранили изменения. Уйти со страницы?')
  }

}
