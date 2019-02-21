import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'A test recipe',
      'This is a test',
      'https://pixnio.com/free-images/2017/09/21/2017-09-21-06-45-25-1100x723.jpg'
    ),
    new Recipe(
      'A test recipe2',
      'This is a test2',
      'https://pixnio.com/free-images/2017/09/21/2017-09-21-06-45-25-1100x723.jpg'
    )
  ];

  constructor() {}

  ngOnInit() {}
}
