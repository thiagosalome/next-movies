export async function getMedia (media, id) {
  const data = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/${media}/${id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=pt-BR&append_to_response=images,videos,credits&include_image_language=null`)
  const response = await data.json()
  return response
}
