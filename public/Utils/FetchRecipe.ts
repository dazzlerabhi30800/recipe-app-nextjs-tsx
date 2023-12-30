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
  if(!id) return;
  const url = await fetch(
    `https://api.edamam.com/api/recipes/v2/${id}?type=public&app_id=${process.env.NEXT_PUBLIC_APP_ID?.toString()}&app_key=${process.env.NEXT_PUBLIC_APP_KEY?.toString()}`,
  );
  const response = await url.json();
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
