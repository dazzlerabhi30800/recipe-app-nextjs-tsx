"use client";
import Recipes from "@/Components/RecipeWrapper";
import { AppDispatch, searchRecipes } from "@/Store/Slice";
import styles from "@/app/page.module.css";
import {useEffect} from 'react';
import { useDispatch } from "react-redux";

type recipeSearch = {
  params: {
    recipes: string;
  };
};
export default function RecipesSearch({ params: { recipes } }: recipeSearch) {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(searchRecipes(recipes.toLowerCase()));
  }, [])
  return (
    <main className={styles.main}>
      <h1 className={styles.heading}>Recipe:- {recipes}</h1>
      <Recipes />
    </main>
  );
}
