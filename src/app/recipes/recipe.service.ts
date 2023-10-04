import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({ providedIn: 'root' })
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'Sunny Side Up',
      'Fried Eggs in pan with potatoes and red sauce',
      'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2015/11/shakshuka-11.jpg',
      [
        new Ingredient('Eggs', 2),
        new Ingredient('Potatoes', 2),
        new Ingredient('Red Sauce', 150),
      ]
    ),
    new Recipe(
      'Eggs Florentise',
      'Eggs on top of bread with hollandaise',
      'https://insanelygoodrecipes.com/wp-content/uploads/2020/12/Eggs-Benedict-with-Herbs.png',
      [
        new Ingredient('Potatoes', 2),
        new Ingredient('Toasted Bread', 1),
        new Ingredient('Hollandaise Sauce', 100),
      ]
    ),
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
