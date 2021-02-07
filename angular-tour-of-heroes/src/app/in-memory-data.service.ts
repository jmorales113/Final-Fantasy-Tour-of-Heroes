import { Injectable } from '@angular/core'
import { InMemoryDbService } from 'angular-in-memory-web-api'
import { Hero } from './hero'

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Squall' },
      { id: 12, name: 'Cloud' },
      { id: 13, name: 'Firion' },
      { id: 14, name: 'Vaan' },
      { id: 15, name: 'Lightning' },
      { id: 16, name: 'Terra' },
      { id: 17, name: 'Noctis' },
      { id: 18, name: 'Cecil' },
      { id: 19, name: 'Tidus' },
      { id: 20, name: 'Zidane' },
    ]
    return { heroes }
  }
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11
  }
}
