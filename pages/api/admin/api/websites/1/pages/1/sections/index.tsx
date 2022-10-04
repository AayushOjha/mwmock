import type { NextApiRequest, NextApiResponse } from 'next';
import { emptySections } from '../../../../../../../../../data/empty_page_sections';
import { sections } from '../../../../../../../../../data/page_sections';
import { IEditor } from '../../../../../../../../../services/Interfaces/Editor';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IEditor>
) {
  res.status(200).json(sections);
}
