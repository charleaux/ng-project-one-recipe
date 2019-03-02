import { EventEmitter } from '@angular/core';

import { Recipe } from './recipe.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
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

  getRecipes() {
    return this.recipes.slice();
  }
}
