import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DrinkInfo } from '../../models/drink.model';
import { DrinkService } from '../../services/drink.service';

@Component({
  selector: 'app-drink',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './drink.component.html',
  styleUrl: './drink.component.css'
})
export class DrinkComponent {

  drinkName: string = ''
  drinks: DrinkInfo[] = []
  searchPerformed: boolean = false

  constructor(private drinkService: DrinkService) {}

  onClickDrinkRetriever(drinkName: string) {
    this.drinkName = drinkName
    this.searchPerformed = false

    this.drinkService.searchDrinkByName(this.drinkName).subscribe((data) => {
      this.drinks = data.drinks || []
      this.searchPerformed = true
    });
  }
}