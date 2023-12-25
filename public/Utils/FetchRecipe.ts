
const url = `https://api.edamam.com/api/recipes/v2?q=meat&app_key=${process.env.NEXT_PUBLIC_APP_KEY}&app_id=${process.env.NEXT_PUBLIC_APP_ID}&type=public`

export async function fetchRecipe() {
  const data = await fetch(url);
  const response = await data.json();
  return response;
}
