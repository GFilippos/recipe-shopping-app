import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2015/11/shakshuka-11.jpg'
    ),
    new Recipe(
      'Another Test Recipe',
      'Second Test',
      'https://insanelygoodrecipes.com/wp-content/uploads/2020/12/Eggs-Benedict-with-Herbs.png'
    ),
  ];
  constructor() {}

  ngOnInit(): void {}

  onRecipeClick(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
