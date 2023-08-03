import { EventEmitter, Injectable, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from 'src/app/shopping-list/services/shopping-list.service';

@Injectable()
export class RecipeService implements OnInit {
  selectedRecipe = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80',
      [new Ingredient('eggs', 4), new Ingredient('panners', 10)]
    ),
    new Recipe(
      'A Test 1 Recipe',
      'This is simply for test1',
      'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
      [new Ingredient('Tamatoes', 4), new Ingredient('cucumbars', 2)]
    ),
  ];
  constructor(private slService: ShoppingListService) {}
  ngOnInit(): void {
    debugger;
  }

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return Object.assign({}, this.recipes[index]);
    // return this.recipes[index];
  }

  selectRecipe(recipe) {
    this.selectedRecipe = recipe;
  }

  addIngredentsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
