export async function getLanguages () {
  const data = await fetch(`${process.env.BASE_URL}/configuration/languages?api_key=${process.env.API_KEY}`)
  const response = await data.json()
  return response
}
