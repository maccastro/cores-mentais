import { NextApiRequest, NextApiResponse } from 'next'


const handler = (req: NextApiRequest, res: NextApiResponse) => {
  try {

    const{method} = req;
    res.status(200).json([
      {id: 1, Name: 'Marcelo Alves de Castro', method},
      {id: 2, Name: 'Lucas Vitório de Castro', method},
      {id: 3, Name: 'João Pedro Ferreira e Castro', method}
    ]);
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message })
  }
}

export default handler
