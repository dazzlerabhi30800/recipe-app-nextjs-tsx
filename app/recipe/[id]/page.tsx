import styles from "@/app/page.module.css";
// import styles2 from "@/app/recipe.module.css";
import { fetchRecipe } from "@/public/Utils/FetchRecipe";
import { Suspense } from "react";
import Loading from "./loading";

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
  // console.log(label);
  return (
    <div className={styles.main}>
      <Suspense fallback={<Loading />}>
        <h1>Recipe {id}</h1>
        <p>Name: {label}</p>
      </Suspense>
    </div>
  );
}
