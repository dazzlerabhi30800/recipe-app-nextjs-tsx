import Image from "next/image";

export default function RecipeImg({
  uri,
  label,
}: {
  uri: string;
  label: string;
}) {
  return (
    <Image
      width={300}
      height={300}
      src={uri}
      alt={label}
      priority={true}
      quality={100}
    />
  );
}
