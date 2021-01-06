export async function getCompany (id) {
  const data = await fetch(`${process.env.BASE_URL}/company/${id}?api_key=${process.env.API_KEY}&language=pt-BR`)
  const response = await data.json()
  return response
}
