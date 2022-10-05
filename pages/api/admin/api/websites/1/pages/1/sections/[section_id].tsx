import type { NextApiRequest, NextApiResponse } from 'next';
import { singleSections } from '../../../../../../../../../data/single_section';
import { ISection } from '../../../../../../../../../services/Interfaces/section';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ISection>
) {
  res.status(200).json(singleSections);
}
