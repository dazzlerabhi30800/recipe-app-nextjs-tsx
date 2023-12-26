"use client";
import { useState, FormEvent } from "react";
import styles from "../app/page.module.css";
import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import { searchRecipes, setSearchString, useAppSelector } from "@/Store/Slice";
import { useDispatch } from "react-redux";

export default function Navbar() {
  const searchString = useAppSelector(state => state.auth.searchString);
  const dispatch = useDispatch();
  const [showInput, setShowInput] = useState<boolean>(false);
  const handleShowInput = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (showInput) {
      dispatch(searchRecipes(searchString));
    }
    else {
      setShowInput((prev) => !prev);
    }
  };
  return (
    <nav className={styles.nav}>
      {window.innerWidth < 500 && showInput ? (
        ""
      ) : (
        <h1 className={styles.logo}>goodgut</h1>
      )}
      <form
        style={{ flex: window.innerWidth < 500 && showInput ? "1" : "0" }}
        onSubmit={handleShowInput}
        className={styles.formContainer}
      >
        {showInput && (
          <input onChange={(e) => dispatch(setSearchString(e.target.value))} type="text" placeholder="enter recipe" id="recipe--input" />
        )}
        <button className={styles.searchBtn}>
          <MagnifyingGlassIcon style={{ width: "30px", height: "30px" }} />
        </button>
      </form>
    </nav>
  );
}
