import { fetchRecipe } from "@/public/Utils/FetchRecipe";
import styles from "./page.module.css";
import { useSelector } from "react-redux";
import { AppState } from "@/Store/Slice";

export default async function Home() {
  // const recipes = await fetchRecipe();
  // console.log(recipes);
  const authState = useSelector((state: AppState) => state.auth.authState);
  console.log(authState);
  return (
    <main className={styles.main}>
      <h1 className={styles.heading}>Recipe App</h1>
      <p>Hello this is a paragraph</p>
    </main>
  );
}
