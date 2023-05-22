// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getExample } from '@/lib/examples';
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const value = req.query.value as string;
  const example = getExample.get({ value });
  res.status(200).json(example as any);
}
