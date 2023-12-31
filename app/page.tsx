import Recipes from "@/Components/RecipeWrapper";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.heading}>Top Recipes</h1>
      <Recipes />
    </main>
  );
}
