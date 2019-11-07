import { Injectable } from '@angular/core';

import {Phrase} from '../interfaces/phrase'

let phrases = [
  new Phrase(1, 'Hello World', 'Английский'),
  new Phrase(2, 'Здравствуй, Вселенная', 'Русский'),
  new Phrase(3, 'Bonjour le monde', 'Французский'),
  new Phrase(4, 'Hallo Welt', 'Немецкий')
]

// Promise, который сразу переходит в состояние resolved
// с данными из массива phrases
let phrasePromise = Promise.resolve(phrases)

// Сервис для работы с данными.
// В будущем его можно переделать на работу с сервером.
@Injectable()
export class PhraseService {

  constructor() { }

  // Метод для получения всех фраз.
  // Возвращает Promise с массивом Phrase.
  getAll(): Promise<Phrase[]> {
    return phrasePromise
  }

  // Метод для получения фразы по id.
  // Возвращает Promise с экземпляром Phrase.
  getPhrase(id: number): Promise<Phrase> {
    return phrasePromise
      .then(phrases => phrases.find(x => x.id === id))
  }

}
