"use client";
import { useEffect } from 'react';
import styles from "./page.module.css";
import { AppDispatch, setLoadingState, useAppSelector, fetchRecipes } from "@/Store/Slice";
import { useDispatch } from "react-redux";

export default function Home() {
  const loading = useAppSelector((state) => state.auth.loading);
  const recipes = useAppSelector((state) => state.auth.recipes);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchRecipes());
  }, [])
  const recipeData = [].concat(...recipes?.map((item: any) => item.hits));
  console.log(recipeData);
  return (
    <main className={styles.main}>
      <h1 className={styles.heading}>Recipe App</h1>
      <p>Hello this is a paragraph</p>
      <button onClick={() => dispatch(setLoadingState())} className={styles.button}>Change the Auth Value</button>
    </main>
  );
}
