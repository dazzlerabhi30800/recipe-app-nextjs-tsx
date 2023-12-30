import { searchRecipe } from "@/type";
import Image from "next/image";

export default function RecipeInfo({ info }: { info: searchRecipe }) {
  const {
    recipe: { images, label, image },
  } = info;
  return (
    <div>
      <Image
        width={300}
        quality={100}
        height={300}
        priority={true}
        // src={images.REGULAR.url || images.THUMBNAIL.url || images.SMALL.url}
        src={image}
        alt={label}
      />
    </div>
  );
}
