// const url = `https://api.edamam.com/api/recipes/v2?q=meat&app_key=${process.env.NEXT_PUBLIC_APP_KEY}&app_id=${process.env.NEXT_PUBLIC_APP_ID}&type=public`

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
  // const url = await fetch(
  //   `https://api.edamam.com/api/recipes/v2/${id}?type=public&app_id=${process.env.NEXT_PUBLIC_APP_ID?.toString()}&app_key=${process.env.NEXT_PUBLIC_APP_KEY?.toString()}`
  // );
  const uri = await fetch(
    `https://api.edamam.com/api/recipes/v2/by-uri?type=public&uri=${encoded}&app_id=${process.env.NEXT_PUBLIC_APP_ID}&app_key=${process.env.NEXT_PUBLIC_APP_KEY}`
  );
  const response = await uri.json();
  return response;
  // return new Promise((resolve: any, reject) => {
  //   setTimeout(() => {
  //     if(response) {
  //       resolve(response);
  //     }
  //     else {
  //       reject('no recipe found');
  //     }
  //   }, 3000)
  // })
}

export async function fetchRecipeUri(uri: string) {
  if (!uri) return;
  const encoded = encodeURIComponent(uri);
  const data = await fetch(
    `https://api.edamam.com/api/recipes/v2/by-uri?type=public&uri=${encoded}&app_id=e4ba6739&app_key=ef5add9c1af6afdbd7191fd1ff8bbd6d`
  );
  const response = await data.json();
  if (!response) return;
  return response?.hits[0]?.recipe?.image;
}
