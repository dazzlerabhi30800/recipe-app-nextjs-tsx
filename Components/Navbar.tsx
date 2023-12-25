"use client";
import { useState, FormEvent } from "react";
import styles from "../app/page.module.css";
import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";

export default function Navbar() {
  const [showInput, setShowInput] = useState<boolean>(false);
  const handleShowInput = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowInput((prev) => !prev);
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
          <input type="text" placeholder="enter recipe" id="recipe--input" />
        )}
        <button className={styles.searchBtn}>
          <MagnifyingGlassIcon style={{ width: "30px", height: "30px" }} />
        </button>
      </form>
    </nav>
  );
}
