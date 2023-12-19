const appId = "e4ba6739";
const appKey = "ef5add9c1af6afdbd7191fd1ff8bbd6d";

const url = `https://api.edamam.com/api/recipes/v2?q=meat&app_key=${appKey}&app_id=${appId}&type=public`

export async function fetchRecipe() {
  const data = await fetch(url);
  const response = await data.json();
  return response;
}
