import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingreadients';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingreadients : Ingredient[] 
  // = [
  //   new Ingredient('Apples',5),
  //   new Ingredient('Tomatoes',10)
  // ];
  constructor(private slService : ShoppingListService){ }
  ngOnInit(){
      this.ingreadients = this.slService.getIngredients()
      this.slService.ingredientChanged
      .subscribe(
        (ingredients : Ingredient[]) => {
          this.ingreadients = ingredients
        }
      )
  }
  // onIngredientAdded(ingreadient : Ingredient){
  //   this.ingreadients.push(ingreadient);
  // }
}
