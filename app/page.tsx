import { fetchRecipe } from '@/public/Utils/FetchRecipe'
import styles from './page.module.css'

export default async function Home() {
  // const recipes = await fetchRecipe();
  // console.log(recipes);
  return (
    <main className={styles.main}>
      <h1 className={styles.heading}>Recipe App</h1>
      <p>Hello this is a paragraph</p>
    </main>
  )
}
