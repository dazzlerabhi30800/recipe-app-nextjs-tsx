import styles from "@/app/page.module.css";
import { fetchId } from "@/public/Utils/FetchRecipe";
import Image from "next/image";
import Link from "next/link";

export default function RecipeComp({ item }: { item: any }) {
  const {
    recipe: { images, label, dietLabels, calories, image },
  } = item;
  const {
    _links: {
      self: { href },
    },
  } = item;
  const fetchedId = fetchId(href);
  return (
    <Link href={`/recipe/${fetchedId}`}>
      <div className={styles.recipeComp}>
        <Image
          style={{ width: "100%", height: "200px", objectFit: "cover" }}
          quality={100}
          priority={true}
          width={100}
          height={100}
          src={
            images?.LARGE?.url ||
            images?.REGULAR?.url ||
            image ||
            images?.SMALL?.url
          }
          alt={label}
        />
        <h2>{label}</h2>
        <p className={styles.labels}>
          Labels:
          {dietLabels.length < 1 && <span>No Labels</span>}
          {dietLabels.map((item: string, index: number) => (
            <span key={index}>{item}</span>
          ))}
        </p>
        <p className={styles.calories}>
          Calories
          <span style={{ fontWeight: "700" }}>{calories.toFixed(2)}</span>
        </p>
      </div>
    </Link>
  );
}
