import { Component, Input, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model'

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent {
  @Input() recipe : Recipe;
  recipeSelected = new EventEmitter<void>()
  constructor(){}
  onSelected(){
    
  }
}
