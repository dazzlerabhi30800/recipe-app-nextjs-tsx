import Image from "next/image";
import styles2 from "@/app/recipe.module.css";

export default function RecipeImg({
  uri,
  label,
}: {
  uri: string;
  label: string;
}) {
  console.log(uri);
  return (
    <Image
      className={styles2.recipeImg}
      width={300}
      height={300}
      src={uri}
      alt={label}
      priority={true}
      quality={100}
    />
  );
}
