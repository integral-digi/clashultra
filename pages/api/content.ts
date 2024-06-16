//route responsible for fetching content
import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export default (req: NextApiRequest, res: NextApiResponse) => {
  const filePath = path.join(process.cwd(), 'content.json');
  const content = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  res.status(200).json(content);
};
