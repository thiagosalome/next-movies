// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from 'next'
import { getMedia, searchMedia } from 'lib/medias'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { query } = req
  let media
  if (query.id) {
    media = await getMedia(query.media_type, query.id)
  } else {
    media = await searchMedia(query.media_type, query.query)
  }

  return res.status(200).json(media)
}
