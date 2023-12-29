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
