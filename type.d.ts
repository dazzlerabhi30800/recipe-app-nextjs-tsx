interface searchRecipe {
  from: number;
  to: number;
  count: number;
  hits: [
    {
      recipe: recipe;
      _links?: {
        self: {
          title: string;
          href: string;
        };
      };
    }
  ];
}

export type recipe = {
  uri: string;
  label: string;
  image: string;
  images: images;
  source: string;
  url: string;
  shareAs: string;
  yeild: number;
  dietLabels: Array<any>;
  healthLabels: Array<string>;
  cautions: Array<any>;
  ingredientLines: Array<string>;
  ingredients: Array<ingredients>;
  calories: number;
  totalCO2Emissions: number;
  co2EmissionsClass: string;
  totalWeight: number;
  totalTime: number;
  cuisineType: Array<string>;
  mealType: Array<string>;
  dishType: Array<string>;
  totalNutrients: any;
  totalDaily: any;
  digest: Array<any>;
  instructionLines: Array<string>;
  summary: string;
  tags: Array<string>;
};

export type images = {
  THUMBNAIL: thumbnailImg;
  SMALL: thumbnailImg;
  REGULAR: thumbnailImg;
};

export type thumbnailImg = {
  url: string;
  width: number;
  height: number;
};

export type ingredients = {
  text: string;
  quantity: 1;
  measure: string;
  food: string;
  weight: number;
  foodCategory: string;
  foodId: string;
  image: string;
};
