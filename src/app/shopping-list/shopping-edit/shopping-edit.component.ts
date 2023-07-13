import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ShoppingListService } from 'src/app/shopping-list/services/shopping-list.service';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  //amount pass by view to type script through view child and name use local references
  @ViewChild('amountInput') amountInput: ElementRef;
  //@Output() ingredientAdded = new EventEmitter<Ingredient>();
  constructor(private shoppinglistService: ShoppingListService) {}

  ngOnInit() {}
  onAddShoppingListItem(name) {
    debugger;
    this.shoppinglistService.addIngredients([
      new Ingredient(name.value, this.amountInput.nativeElement.value),
    ]);

    //this.ingredientAdded.emit(new Ingredient(name.value,this.amountInput.nativeElement.value));
  }
}
