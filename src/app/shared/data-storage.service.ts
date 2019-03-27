import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class DataStorageService {
  private urlBase = 'https://ng-project-one-recipe.firebaseio.com';
  constructor(
    private http: Http,
    private recipeService: RecipeService,
    private authService: AuthService
  ) {}

  storeRecipes() {
    let token = this.authService.getToken();
    return this.http.put(
      this.urlBase + '/recipes.json?auth=' + token,
      this.recipeService.getRecipes()
    );
  }

  getRecipes() {
    let token = this.authService.getToken();
    return this.http.get(this.urlBase + '/recipes.json?auth=' + token).pipe(
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
