import styles from "@/app/page.module.css";
import styles2 from "@/app/recipe.module.css";
import { fetchRecipe } from "@/public/Utils/FetchRecipe";
import { Suspense } from "react";
import Loading from "./loading";
import RecipeInfo from "@/Components/Recipe/RecipeInfo";
import RecipeImg from "@/Components/Recipe/RecipeImg";
import { searchRecipe } from "@/type";
import IngredientList from "@/Components/Recipe/IngredientList";

type recipeParams = {
  params: {
    id: string;
  };
};
export default async function Recipe({ params: { id } }: recipeParams) {
  const fetchedRecipe: searchRecipe = await fetchRecipe(id);
  const { recipe } = fetchedRecipe.hits[0];
  return (
    <main className={styles.main}>
      <Suspense fallback={<Loading />}>
        <div className={styles2.searchRecipeWrapper}>
          <RecipeImg label={recipe.label} uri={recipe.image} />
          <RecipeInfo recipe={recipe} />
        </div>
        <IngredientList ingredients={recipe.ingredientLines}  />
      </Suspense>
    </main>
  );
}
