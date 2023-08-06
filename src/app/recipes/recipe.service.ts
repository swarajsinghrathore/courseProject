import { EventEmitter, Injectable } from '@angular/core'
import { Recipe } from "./recipe.model"
import { Ingredient } from '../shared/ingreadients';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
@Injectable()
export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>()
    private recipes : Recipe[] = [
        new Recipe('A Test Recipe','This is simply a test','https://www.jkcart.com/uploads/blogs/blogImg_897344715337988812925452166647.jpg',[new Ingredient('Burger',1), new Ingredient('French Fries',2)]),
        new Recipe('Testing for my understanding','My testing description','https://th.bing.com/th/id/OIP._PSLap_YNA5bKOgK4lOC8QHaHa?w=188&h=188&c=7&r=0&o=5&dpr=1.5&pid=1.7',[new Ingredient('Pomogranate',10), new Ingredient('Oranges',20)])
    ]
    constructor(private slService : ShoppingListService){}
    getRecipes(){
        return this.recipes.slice();
    }
    addIngredientToShoppingList(ingreadients : Ingredient[]){
        this.slService.addIngredients(ingreadients)
    }
}