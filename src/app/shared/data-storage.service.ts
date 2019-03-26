import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';

@Injectable()
export class DataStorageService {
  private urlBase = 'https://ng-project-one-recipe.firebaseio.com';
  constructor(private http: Http, private recipeService: RecipeService) {}

  storeRecipes() {
    return this.http.put(
      this.urlBase + '/recipes.json',
      this.recipeService.getRecipes()
    );
  }

  getRecipes() {
    return this.http.get(this.urlBase + '/recipes.json').pipe(
      map((response: Response) => {
        const recipes: Recipe[] = response.json();
        for (const recipe of recipes) {
          if (!recipe.ingredients) {
            recipe.ingredients = [];
          }
        }
        this.recipeService.setRecipes(recipes);
        return recipes;
      }),
      catchError(error => throwError('Something went wrong'))
    );
  }
}
