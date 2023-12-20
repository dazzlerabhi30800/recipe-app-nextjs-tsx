import styles from "../app/page.module.css";

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <h1 className={styles.logo}>goodgut</h1>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
