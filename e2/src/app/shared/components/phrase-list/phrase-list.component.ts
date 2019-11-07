import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

import {Phrase} from '../../interfaces/phrase'
import {PhraseService} from '../../services/phrase.service'

@Component({
  selector: 'app-phrase-list',
  templateUrl: './phrase-list.component.html',
  styleUrls: ['./phrase-list.component.scss']
})
export class PhraseListComponent implements OnInit {

  phrases: Phrase[]

  constructor(
    private router: Router,
    private phraseService: PhraseService
  ) {}

  ngOnInit() {
    this.phraseService // Обращаемся к сервису.
      .getAll() // Получаем Promise.
      .then(result => this.phrases = result) // Как только
        // Promise перейдёт в состояние resolved, то результат
        // его работы присваиваем свойству phrases.
  }

  onSelect(selected: Phrase) {
    // При клике по элементу списка перенаправляем
    // пользователя по адресу /phrases/id.
    // Адрес с обязательным параметром указан в настройках
    // маршрутизации в файле app.routes.ts.
    this.router.navigate(['phrase', selected.id])
  }

}
