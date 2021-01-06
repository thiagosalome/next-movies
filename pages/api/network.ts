// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from 'next'
import { getNetwork } from 'lib/network'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { query } = req
  const network = await getNetwork(query.id)

  return res.status(200).json(network)
}
