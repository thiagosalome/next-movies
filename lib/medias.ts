export async function getMedia (media, id) {
  const data = await fetch(`${process.env.BASE_URL}/${media}/${id}?api_key=${process.env.API_KEY}&language=pt-BR&append_to_response=images,credits&include_image_language=null`)
  const response = await data.json()
  return response
}
