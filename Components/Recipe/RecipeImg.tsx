import Image from "next/image";

export default function RecipeImg({ uri, alt }: { uri: string; alt: string }) {
  return (
    <Image
      width={300}
      height={300}
      src={uri}
      alt={alt}
      priority={true}
      quality={100}
    />
  );
}
