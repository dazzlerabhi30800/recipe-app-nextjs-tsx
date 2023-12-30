import { recipe } from "@/type";
import styles2 from "@/app/recipe.module.css";
import styles from "@/app/page.module.css";
import Labels from "./Labels";

export default function RecipeInfo({ recipe }: { recipe: recipe }) {
  const { label, summary, dietLabels, healthLabels, calories } = recipe;
  return (
    <div className={styles2.recipeContainer}>
      <h1 className={styles.heading}>{label}</h1>
      <p>{summary}</p>
      <Labels labels={dietLabels} title="Diet Labels" />
      <Labels labels={healthLabels} title="Health Labels" />
      <p style={{ fontWeight: "700", marginTop: "1rem" }} className={styles.calories}>
        Calories: {calories.toFixed(2)}
      </p>
    </div>
  );
}
