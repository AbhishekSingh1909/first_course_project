import { Ingredient } from '../shared/ingredient.model';

export class Recipe {
  public name: string;
  public description: string;
  public imagePath: string;
  public ingrideints: Ingredient[];

  constructor(
    name: string,
    desc: string,
    imagePath: string,
    ingrideints: Ingredient[]
  ) {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
    this.ingrideints = ingrideints;
  }
}
