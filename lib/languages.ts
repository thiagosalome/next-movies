export async function getLanguages () {
  const data = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/configuration/languages?api_key=${process.env.NEXT_PUBLIC_API_KEY}`)
  const response = await data.json()
  return response
}
