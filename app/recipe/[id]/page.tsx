import styles from "@/app/page.module.css";
// import styles2 from "@/app/recipe.module.css";
import { fetchRecipe } from "@/public/Utils/FetchRecipe";
import { Suspense } from "react";
import Loading from "./loading";
import RecipeInfo from "@/Components/Recipe/RecipeInfo";

type recipeParams = {
  params: {
    id: string;
  };
};
export default async function Recipe({ params: { id } }: recipeParams) {
  const fetchedRecipe: any = await fetchRecipe(id);
  const {
    recipe: { label },
  } = fetchedRecipe;
  return (
    <main className={styles.main}>
      <Suspense fallback={<Loading />}>
        <h1>Recipe: {id} {label}</h1>
        <RecipeInfo info={fetchedRecipe} />
      </Suspense>
    </main>
  );
}
