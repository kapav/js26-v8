import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router'

import {Phrase} from '../../interfaces/phrase'
import {CanComponentDeactivate} from '../../services/can-deactivate.guard'

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
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    // paramMap - словарь параметров текущего маршрута. Данное
    // свойство является Observable объектом. Если параметры
    // будут изменены - произойдёт событие, и компонент узнает
    // об изменениях.
    // OBSERVABLE PARAMMAP
    // forEach - устанавливаем обработчик на каждае изменение
    // paramMap.
    // phrase - инициализируется с помощью PhraseDetailResolve
    // объекта, который указан в настройках системы
    // маршрутизации.
    // На activatedRout'е обращаемся к свойству data, а не
    // param как в прошлых примерах.
    // Данный компонент избавился от зависимости PhraseService.
    this.activatedRoute.data.forEach((data: { phrase: Phrase }) => {
      this.phrase = data.phrase
      this.editValue = data.phrase.value
      this.editLanguage = data.phrase.language
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
