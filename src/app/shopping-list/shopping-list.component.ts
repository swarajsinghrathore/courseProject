import { Component } from '@angular/core';
import { Ingredient } from '../shared/ingreadients';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
  ingreadients : Ingredient[] = [
    new Ingredient('Apples',5),
    new Ingredient('Tomatoes',10)
  ];
  constructor(){ }
  onIngredientAdded(ingreadient : Ingredient){
    this.ingreadients.push(ingreadient);
  }
}
