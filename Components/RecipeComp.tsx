import styles from "@/app/page.module.css";
import Image from "next/image";

export default function RecipeComp({ item }: any) {
  const {
    recipe: { images, label, summary, calories },
  } = item;
  //   console.log(item);
  return (
    <div className={styles.recipeComp}>
      <Image
        style={{ width: "100%", height: "200px", objectFit: "cover" }}
        priority={true}
        width={100}
        height={100}
        src={images?.LARGE?.url || images?.REGULAR?.url}
        alt={label}
      />
      <h2>{label}</h2>
      <p>
        {summary ? summary.substring(0, 70) + "..." : "No Summary Available"}
      </p>
      <p className={styles.calories}>
        Calories
        <span>{calories.toFixed(2)}</span>
      </p>
    </div>
  );
}
