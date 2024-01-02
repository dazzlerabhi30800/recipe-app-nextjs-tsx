"use client";
import styles from "@/app/page.module.css";
import { useEffect } from "react";
import {
  useAppSelector,
  fetchRecipes,
  AppDispatch,
  nextPageRecipes,
} from "@/Store/Slice";
import { useDispatch } from "react-redux";
import RecipeComp from "./RecipeComp";
import Loading from "@/app/loading";

export default function Recipes() {
  const loading = useAppSelector((state) => state.auth.loading);
  const recipes = useAppSelector((state) => state.auth.recipes);
  const nextPageLink = useAppSelector((state) => state.auth.nextPageLink);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    if (recipes.length >= 1) return;
    dispatch(fetchRecipes());
  }, []);
  const recipeData = [].concat(...recipes?.map((item: any) => item.hits));
  if (loading) return <Loading />;
  return (
    <>
      <div className={styles.recipeWrapper}>
        {recipeData.map((item: any, index) => (
          <RecipeComp key={index} item={item} />
        ))}
      </div>
      <button
        onClick={() => dispatch(nextPageRecipes(nextPageLink))}
        className={`${styles.button} ${styles.nextButton}`}
      >
        Load More Recipes
      </button>
    </>
  );
}
