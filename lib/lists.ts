export async function getLists () {
  const data = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/account/${process.env.ACCOUNT}/lists?api_key=${process.env.NEXT_PUBLIC_API_KEY}&session_id=${process.env.SESSION_ID}`)
  const response = await data.json()
  return response
}

export async function getList (id) {
  const data = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/list/${id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=pt-BR`)
  const response = await data.json()
  return response
}
