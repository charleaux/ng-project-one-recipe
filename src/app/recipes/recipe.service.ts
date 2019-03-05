import { EventEmitter, Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'Tasty Schnitzel',
      'A super-tasty Schnitzel - just awesome!',
      'https://www.maxpixel.net/static/photo/1x/Schnipo-Lunch-Eat-Schnitzel-Schnitzel-With-Fries-1837703.jpg',
      [new Ingredient('Meat', 1), new Ingredient('French Fries', 20)]
    ),
    new Recipe(
      'Big Fat Burger',
      'What else do you need to say?',
      'https://www.maxpixel.net/static/photo/1x/Burger-Roll-Barbecue-Hamburger-Barbeque-Bbq-2762431.jpg',
      [new Ingredient('Buns', 2), new Ingredient('Meat', 1)]
    )
  ];
  constructor(private slService: ShoppingListService) {}
  getRecipes() {
    return this.recipes.slice();
  }
  getRecipe(index: number): Recipe {
    return this.recipes[index];
  }
  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
