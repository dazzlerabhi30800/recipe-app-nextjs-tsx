import styles from "@/app/page.module.css";
// import styles2 from "@/app/recipe.module.css";
import { fetchRecipe, fetchRecipeUri } from "@/public/Utils/FetchRecipe";
import { Suspense } from "react";
import Loading from "./loading";
import RecipeInfo from "@/Components/Recipe/RecipeInfo";
import RecipeImg from "@/Components/Recipe/RecipeImg";

type recipeParams = {
  params: {
    id: string;
  };
};
export default async function Recipe({ params: { id } }: recipeParams) {
  const fetchedRecipe: any = await fetchRecipe(id);
  const {
    recipe: { label, uri },
  } = fetchedRecipe;
  const recipeImg: any = await fetchRecipeUri(uri);
  return (
    <main className={styles.main}>
      <Suspense fallback={<Loading />}>
        <h1>
          Recipe: <span style={{ fontSize: "1.3rem" }}>{id}</span>
        </h1>
        <RecipeImg alt={label} uri={recipeImg} />
        <RecipeInfo info={fetchedRecipe} />
      </Suspense>
    </main>
  );
}
