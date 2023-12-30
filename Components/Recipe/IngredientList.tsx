export default function IngredientList({ingredients}: {ingredients: Array<string>}) {
  return (
  <div className="ingredient--wrapper">
      <h2 className="ingredient--title">Ingredients</h2>
      <ul className="ingredients">
        {ingredients.map((ingredient: string, index: number) => (
        <li key={index}>{ingredient}</li>
        ))}
      </ul>
    </div>
  )
}
