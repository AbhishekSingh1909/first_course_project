import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './services/recipe.services';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService], // available to all component in this folder
})
export class RecipesComponent implements OnInit {
  recipe: Recipe;
  constructor(private recipeService: RecipeService) {}

  ngOnInit() {
    debugger;
    this.recipeService.selectedRecipe.subscribe((recipe) => {
      this.recipe = recipe;
    });
  }
}
