import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../services/recipe.services';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  @Input() selectedRecipe: Recipe;

  constructor(private recipeService: RecipeService) {}

  ngOnInit() {}

  addIngredeints() {
    this.recipeService.addIngredentsToShoppingList(
      this.selectedRecipe.ingrideints
    );
  }
}
