export async function getNetwork (id) {
  const data = await fetch(`${process.env.BASE_URL}/network/${id}?api_key=${process.env.API_KEY}&language=pt-BR`)
  const response = await data.json()
  return response
}
