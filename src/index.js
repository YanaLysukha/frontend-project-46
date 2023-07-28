import { readFileSync } from 'fs';
import path from 'path';

const getPath = (fileName) => path.resolve(process.cwd(), fileName);
const getExtension = (fileName) => path.extname(fileName).slice(1);

const genDiff = (filepath1, filepath2, format) => {
  const filePath1 = getPath(filepath1);
  const filePath2 = getPath(filepath2);
};

export default genDiff;