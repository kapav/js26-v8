import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, ParamMap} from '@angular/router'

import {Phrase} from '../../interfaces/phrase'
import {PhraseService} from '../../services/phrase.service'

@Component({
  selector: 'app-phrase-detail',
  templateUrl: './phrase-detail.component.html',
  styleUrls: ['./phrase-detail.component.scss']
})
export class PhraseDetailComponent implements OnInit {

  phrase: Phrase

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
      let id = +paramMap.get('id') // Приводим значение
      this.phraseService // параметра id к типу number.
        .getPhrase(id) // Обращаемся к сервису и запрашиваем
          // фразу по id. Получаем Promise.
        .then(result => this.phrase = result) //  Как только
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

  goToPhraseList() {
    this.router.navigate(['phrase']) // Перенаправляет
      // пользователя на PhraseListComponent.
  }

}
