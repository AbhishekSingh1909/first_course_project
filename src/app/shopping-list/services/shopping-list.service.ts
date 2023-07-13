import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Injectable({ providedIn: 'root' })
export class ShoppingListService {
  ingredientsAdded = new EventEmitter<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tamatoes', 10),
  ];

  getIntgredints(): Ingredient[] {
    return this.ingredients.slice();
  }

  addIngredients(ingredient: Ingredient[]) {
    //spread operator use to assign array elements into an array because push does not assign array to another array.
    this.ingredients.push(...ingredient);

    // do group by and sum of values

    var result: Ingredient[] = [];
    const r = this.ingredients.reduce(function (res, value) {
      debugger;
      if (!res[value.name]) {
        res[value.name] = { name: value.name, amount: 0 };
        result.push(res[value.name]);
      }
      res[value.name].amount += value.amount;

      return res;
    }, {});
    console.log(r);
    this.ingredients = result; //this.groupBy(this.ingredients, 'name');
    this.ingredientsAdded.emit(this.ingredients.slice());
  }
}
