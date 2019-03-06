import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  newRecipe: boolean;
  editRecipe: boolean;
  id: number;
  editMode = false;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params.id;
      params.id === undefined
        ? (this.editMode = false)
        : (this.editMode = true);
    });
    if (this.route.snapshot.url[0].path !== 'new') {
      this.newRecipe = false;
      this.editRecipe = true;
    } else {
      this.newRecipe = true;
      this.editRecipe = false;
    }
  }
}
