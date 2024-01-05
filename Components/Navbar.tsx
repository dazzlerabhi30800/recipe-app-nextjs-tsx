"use client";
import { useState, FormEvent, useEffect } from "react";
import styles from "../app/page.module.css";
import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import { useAppSelector, setSearchString, AppDispatch } from "@/Store/Slice";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const searchString = useAppSelector((state) => state.auth.searchString);
  const [client, setClient] = useState<boolean>(false);
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const [showInput, setShowInput] = useState<boolean>(false);

  // function to handle form submit
  const handleSearchRecipe = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!showInput) return;
    router.push(`/recipes/${searchString}`);
  };

  // This is will solve the problem of window is undefined
  useEffect(() => {
    setClient(true);
  }, []);

  if (!client) return false;
  return (
    <nav className={styles.nav}>
      {window.innerWidth < 500 && showInput ? (
        ""
      ) : (
        <h1 onClick={() => router.push("/")} className={styles.logo}>goodgut</h1>
      )}
      <form
        style={{ flex: window.innerWidth < 500 && showInput ? "1" : "0" }}
        onSubmit={handleSearchRecipe}
        className={styles.formContainer}
      >
        {showInput && (
          <input
            onChange={(e) => dispatch(setSearchString(e.target.value))}
            autoFocus={showInput}
            value={searchString}
            type="text"
            placeholder="enter recipe"
            id="recipe--input"
          />
        )}
        <button
          type="button"
          onClick={() => setShowInput((prev) => !prev)}
          className={styles.searchBtn}
        >
          <MagnifyingGlassIcon style={{ width: "30px", height: "30px" }} />
        </button>
      </form>
    </nav>
  );
}
