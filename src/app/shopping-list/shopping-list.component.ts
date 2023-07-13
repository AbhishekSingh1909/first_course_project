import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './services/shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [];

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit() {
    debugger;
    this.ingredients = this.shoppingListService.getIntgredints();
    //this event listener listen event change in ingredeints array
    this.shoppingListService.ingredientsAdded.subscribe(
      (ingredients: Ingredient[]) => {
        debugger;
        this.ingredients = ingredients;
      }
    );
  }
  // onIngredientAdded(inputData :Ingredient ){
  //   this.ingredients.push(inputData);
  // }
}
