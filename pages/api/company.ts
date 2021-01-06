// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from 'next'
import { getCompany } from 'lib/company'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { query } = req
  const network = await getCompany(query.id)

  return res.status(200).json(network)
}
