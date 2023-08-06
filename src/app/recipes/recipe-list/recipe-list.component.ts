import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model'
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  // @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes : Recipe[] 
  // [
  //   new Recipe('A Test Recipe','This is simply a test','https://www.jkcart.com/uploads/blogs/blogImg_897344715337988812925452166647.jpg'),
  //   new Recipe('Testing for my understanding','My testing description','https://th.bing.com/th/id/OIP._PSLap_YNA5bKOgK4lOC8QHaHa?w=188&h=188&c=7&r=0&o=5&dpr=1.5&pid=1.7')
  // ]
  constructor(private recipeService : RecipeService){

  }
  ngOnInit() {
      this.recipes = this.recipeService.getRecipes();
  }
  // onRecipeSelected(recipe : Recipe){
  //   this.recipeWasSelected.emit(recipe);
  // }
}
