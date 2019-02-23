import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      'A test recipe',
      'This is a test',
      'https://suzyssitcom.com/wp-content/uploads/2014/07/Teriyaki-Orange-Beef-Kebabs-and-Wet-Naps7.jpg'
    ),
    new Recipe(
      'A test recipe2',
      'This is a test2',
      'https://www.maxpixel.net/static/photo/1x/Food-Kitchen-Meals-Home-Made-Dishes-Recipe-Bio-1175493.jpg'
    )
  ];

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
  constructor() {}

  ngOnInit() {}
}
