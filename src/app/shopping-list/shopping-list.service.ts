import { EventEmitter } from '@angular/core'
import { Ingredient } from "../shared/ingreadients";
export class ShoppingListService{
    ingredientChanged = new EventEmitter<Ingredient[]>()
    private ingreadients : Ingredient[] = [
        new Ingredient('Apples',5),
        new Ingredient('Tomatoes',10)
    ];
    getIngredients(){
        return this.ingreadients.slice();
    }
    addIngredient(ingreadient : Ingredient){
        this.ingreadients.push(ingreadient)
        this.ingredientChanged.emit(this.ingreadients.slice())
    }
    addIngredients(ingredients : Ingredient[]){
        // for(let ingredient of ingredients){
        //     this.addIngredient(ingredient)
        // }
        this.ingreadients.push(...ingredients)
        this.ingredientChanged.emit(this.ingreadients.slice())
    }
}