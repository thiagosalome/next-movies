export async function getMedia (media, id) {
  const data = await fetch(`${process.env.BASE_URL}/${media}/${id}?api_key=${process.env.API_KEY}&language=pt-BR&append_to_response=images,videos,credits&include_image_language=null`)
  const response = await data.json()
  return response
}

export async function searchMedia (media, query) {
  const data = await fetch(`${process.env.BASE_URL}/search/${media}?query=${query}&api_key=${process.env.API_KEY}&language=pt-BR`)
  const response = await data.json()
  return response
}
