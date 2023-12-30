export function fetchId(url: string) {
  const idRegex = /\/\w+\?/gi;
  const replaceRegex = /\/|\?/gi;
  const index = url?.match(idRegex);
  if (!index) return;
  const rawId = index[0];
  const id = rawId?.replace(replaceRegex, "");
  return id;
}

export async function fetchRecipe(id: string) {
  if (!id) return;
  const url = `http://www.edamam.com/ontologies/edamam.owl#recipe_${id}`;
  const encoded = encodeURIComponent(url);
  const uri = await fetch(
    `https://api.edamam.com/api/recipes/v2/by-uri?type=public&uri=${encoded}&app_id=${process.env.NEXT_PUBLIC_APP_ID}&app_key=${process.env.NEXT_PUBLIC_APP_KEY}`
  );
  const response = await uri.json();
  return response;
}
