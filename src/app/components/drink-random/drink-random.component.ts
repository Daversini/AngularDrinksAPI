import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DrinkInfo } from '../../models/drink.model';
import { DrinkService } from '../../services/drink.service';

@Component({
  selector: 'app-drink-random',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './drink-random.component.html',
  styleUrl: './drink-random.component.css'
})
export class DrinkRandomComponent implements OnInit {

  drinks : DrinkInfo[] = []

  constructor(private drinkService: DrinkService) {}

  ngOnInit(): void {
    this.onClickDrinkRetriever()
  }

  onClickDrinkRetriever() {
    this.drinks = []
    for (let i = 0; i < 3; i++) {
      this.drinkService.getRandomDrink().subscribe((data) => {
        const drink = data.drinks[0];
        //await this.sleep(3000)
        this.drinks.push(drink);
      });
    }
  }

  //sleep(ms: number): Promise<void> { return new Promise(resolve => setTimeout(resolve, ms)); }
}