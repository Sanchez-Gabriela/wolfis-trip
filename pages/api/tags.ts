import { NextApiRequest, NextApiResponse } from 'next';
import { insertEntries } from '../../db';

export default async function tag(req: NextApiRequest, res: NextApiResponse) {
  console.log(req.body);
  const placeIds = req.body.placeIds;
  console.log('tags.ts:', placeIds);
  const journeyId = req.body.journeyId;
  console.log(journeyId);
  const tags = await insertEntries(placeIds, journeyId);
  res.json(tags);
}
