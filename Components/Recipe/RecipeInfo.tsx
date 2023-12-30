import { searchRecipe } from "@/type";
import Image from "next/image";

export default function RecipeInfo({ info }: { info: searchRecipe }) {
  const {
    recipe: { label },
  } = info;
  const alternateImgUrl: string =
    "https://images.unsplash.com/photo-1473093226795-af9932fe5856?q=80&w=1994&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <div>
      <h2>{label}</h2>
    </div>
  );
}
