import { NextApiRequest, NextApiResponse } from 'next';
import { insertJourney } from '../../db';

export default async function journey(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  console.log(req.body);
  const startDate = req.body.startDate;
  const endDate = req.body.endDate;
  const userId = req.body.userId;
  const journeys = await insertJourney(startDate, endDate, userId);
  console.log(journeys);
  res.json(journeys[0]);
}
