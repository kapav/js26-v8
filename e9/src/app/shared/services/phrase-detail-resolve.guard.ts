import {Injectable} from '@angular/core'
import {Router, Resolve, ActivatedRouteSnapshot} from '@angular/router'

import {Phrase} from '../interfaces/phrase'
import {PhraseService} from './phrase.service'

// Resolve - интерфейс указывает на то, что объект может быть
// поставщиком данных (data provider).
// Подобные объекты позволяют избегать проблемы, связанной с
// тем, что компонент уже отобразился пользователю, а данные
// для компонента ещё не доступны.
@Injectable()
export class PhraseDetailResolve implements Resolve<Phrase> {

  constructor(
    private router: Router,
    private phraseService: PhraseService
  ) {}

  resolve(route: ActivatedRouteSnapshot): Promise<Phrase> | Phrase {
    const id = +route.paramMap.get('id')
    return this.phraseService.getPhrase(id).then(phrase => {
      if (phrase) {
        return phrase
      } else { // Не удалось найти фразу по id.
        this.router.navigate(['/phrase'])
        return null
      }
    })
  }

}
