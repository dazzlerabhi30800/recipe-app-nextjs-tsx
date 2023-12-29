import styles from "@/app/page.module.css";
import { fetchRecipe } from "@/public/Utils/FetchRecipe";

type recipeParams = {
  params: {
    id: string;
  };
};
export default async function Recipe({ params: { id } }: recipeParams) {
  const recipe = await fetchRecipe(id);
  console.log(recipe);
  return (
    <div className={styles.main}>
      <h1>Recipe {id}</h1>
    </div>
  );
}
