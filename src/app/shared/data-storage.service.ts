import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { AuthService } from '../auth/auth.service';
import {
  HttpClient,
  HttpHeaders,
  HttpParams,
  HttpRequest
} from '@angular/common/http';

@Injectable()
export class DataStorageService {
  private urlBase = 'https://ng-project-one-recipe.firebaseio.com';
  constructor(
    private httpClient: HttpClient,
    private recipeService: RecipeService,
    private authService: AuthService
  ) {}

  storeRecipes() {
    //const token = this.authService.getToken();
    // const headers = new HttpHeaders().set('Authorization','Bearer afdklasfladf');
    // const params = new HttpParams().set('auth', token);
    // return this.httpClient.put(
    //   this.urlBase + '/recipes.json',
    //   this.recipeService.getRecipes(),
    //   {
    //     observe: 'body',
    //     params
    //   }
    // );
    // const req = new HttpRequest('PUT',this.urlBase + '/recipes.json',this.recipeService.getRecipes(),{ reportProgress: true, params });
    const req = new HttpRequest(
      'PUT',
      this.urlBase + '/recipes.json',
      this.recipeService.getRecipes(),
      { reportProgress: true }
    );
    return this.httpClient.request(req);
  }

  getRecipes() {
    //const token = this.authService.getToken();
    // const params = new HttpParams().set('auth', token);
    return (
      this.httpClient
        // .get<Recipe[]>(this.urlBase + '/recipes.json?auth=' + token)
        // .get<Recipe[]>(this.urlBase + '/recipes.json', {
        //   observe: 'body',
        //   responseType: 'json',
        //   params
        // })
        .get<Recipe[]>(this.urlBase + '/recipes.json', {
          observe: 'body',
          responseType: 'json'
        })
        .pipe(
          map(recipes => {
            for (const recipe of recipes) {
              if (!recipe.ingredients) {
                recipe.ingredients = [];
              }
            }
            this.recipeService.setRecipes(recipes);
            return recipes;
          }),
          catchError(error => throwError('Something went wrong: ', error))
        )
    );
  }
}
