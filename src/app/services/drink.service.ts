import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Drink } from '../models/drink.model';

@Injectable({
  providedIn: 'root'
})
export class DrinkService {

  private apiUrl = 'https://www.thecocktaildb.com/api/json/v1/1/'

  constructor(private http: HttpClient) { }

  getRandomDrink() : Observable<Drink> {
    let endPoint : string = this.apiUrl + "random.php"
    return this.http.get<Drink>(endPoint)
  }

  searchDrinkByName(drinkName: string) : Observable<Drink> {
    let endPoint : string = this.apiUrl + "search.php?s=" + drinkName
    console.log(endPoint)
    return this.http.get<Drink>(endPoint)
  }
}