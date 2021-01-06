// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from 'next'
import { getMedia } from 'lib/medias'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { query } = req
  const media = await getMedia(query.media_type, query.id)

  return res.status(200).json(media)
}
