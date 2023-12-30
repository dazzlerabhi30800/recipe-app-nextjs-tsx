import { recipe } from "@/type";

export default function RecipeInfo({ recipe }: { recipe: recipe }) {
  const { label } = recipe;
  return (
    <div>
      <h2>{label}</h2>
    </div>
  );
}
