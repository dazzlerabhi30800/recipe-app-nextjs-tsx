"use client";
import { fetchRecipe } from "@/public/Utils/FetchRecipe";
import styles from "./page.module.css";
import { AppDispatch, setAuthState, useAppSelector } from "@/Store/Slice";
import { useDispatch } from "react-redux";

export default function Home() {
  const authState = useAppSelector((state) => state.auth.authState);
  const dispatch =  useDispatch<AppDispatch>();
  console.log(authState);
  return (
    <main className={styles.main}>
      <h1 className={styles.heading}>Recipe App</h1>
      <p>Hello this is a paragraph</p>
      <button onClick={() => dispatch(setAuthState())} className={styles.button}>Change the Auth Value</button>
    </main>
  );
}
