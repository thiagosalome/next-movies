export async function getLists() {
  const data = await fetch(`${process.env.BASE_URL}/account/${process.env.ACCOUNT}/lists?api_key=${process.env.API_KEY}&session_id=${process.env.SESSION_ID}`)
  const response = await data.json()
  return response
}

export async function getList(id) {
  const data = await fetch(`${process.env.BASE_URL}/list/${id}?api_key=${process.env.API_KEY}&language=pt-BR`)
  const response = await data.json()
  return response
}
