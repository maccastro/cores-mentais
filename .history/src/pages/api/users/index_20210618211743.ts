import { NextApiRequest, NextApiResponse } from 'next'


const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    res.status(200).json([
      {id: 1, Name: 'Marcelo Alves de Castro'},
      {id: 2, Name: 'Lucas Vitório de Castro'},
      {id: 3, Name: 'João Pedro Ferreira e Castro'}
    ]);
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message })
  }
}

export default handler
