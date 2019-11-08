import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, ParamMap} from '@angular/router'

import {Phrase} from '../../interfaces/phrase'
import {PhraseService} from '../../services/phrase.service'

@Component({
  selector: 'app-phrase-list',
  templateUrl: './phrase-list.component.html',
  styleUrls: ['./phrase-list.component.scss']
})
export class PhraseListComponent implements OnInit {

  selectedId: number
  phrases: Phrase[]

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute, // Добавлен
    private phraseService: PhraseService
  ) {}

  // Обработчик событий изменения параметров адресной строки.
  ngOnInit() { // ParamMap добавлен в import.
    this.activatedRoute.paramMap
      .forEach((paramMap: ParamMap) => {
        this.selectedId = +paramMap.get('id')
        this.phraseService // Обращаемся к сервису.
          .getAll() // Получаем Promise.
          .then(result => this.phrases = result) // Как только
            // Promise перейдёт в состояние resolved, то результат
            // его работы присваиваем свойству phrases.
    })
  }

  // Для выделения выбранного элемента данный метод принимает
  // фразу и возвращает булевое значение.
  isSelected(phrase: Phrase) {
    return phrase.id === this.selectedId
  }

  onSelect(selected: Phrase) {
    // При клике по элементу списка перенаправляем
    // пользователя по адресу /phrases/id.
    // Адрес с обязательным параметром указан в настройках
    // маршрутизации в файле app.routes.ts.
    this.router.navigate(['phrase', selected.id])
  }

}
