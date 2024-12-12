import { Component, OnInit } from '@angular/core';
import { DrinkInfo } from '../../models/drink.model';
import { DrinkService } from '../../services/drink.service';

@Component({
  selector: 'app-drink-random',
  standalone: true,
  imports: [],
  templateUrl: './drink-random.component.html',
  styleUrl: './drink-random.component.css'
})
export class DrinkRandomComponent implements OnInit {

  drink : DrinkInfo

  constructor(private drinkService: DrinkService) {
    this.drink = new DrinkInfo()
  }

  ngOnInit(): void {
    this.onClickDrinkRetriever()
  }

  onClickDrinkRetriever() {
    this.drinkService.getRandomDrink().subscribe((data) => {
      this.drink = data.drinks[0]
    });
  }
}