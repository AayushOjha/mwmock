import type { NextApiRequest, NextApiResponse } from 'next';
import {
  sections,
  sections_with_empty_section,
} from '../../../../../../../../../data/page_sections';
import { IEditor } from '../../../../../../../../../services/Interfaces/editor';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IEditor | null>
) {
  if (req.method === 'GET') {
    res.status(200).json(sections);
  } else if (req.method === 'POST') {
    res.status(201).json(sections_with_empty_section);
  } else {
    res.status(404).json(null);
  }
}
