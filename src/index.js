import { readFileSync } from 'fs';
import path from 'path';
import makeTree from './buildTree.js';
import makeStylish from './stylish.js';
import getParse from './parsers.js';

const getPath = (fileName) => path.resolve(process.cwd(), fileName);

const getExtension = (fileName) => path.extname(fileName).slice(1);

const genDiff = (filepath1, filepath2) => {
  const filePath1 = getPath(filepath1);
  const filePath2 = getPath(filepath2);

  const fileExt1 = getExtension(filepath1);
  const fileExt2 = getExtension(filepath2);

  const fileData1 = readFileSync(filePath1, 'utf-8');
  const fileData2 = readFileSync(filePath2, 'utf-8');

  const parsedData1 = getParse(fileData1, fileExt1);
  const parsedData2 = getParse(fileData2, fileExt2);
  const tree = makeTree(parsedData1, parsedData2);

  // return JSON.stringify(tree);
  // return tree;
  return makeStylish(tree);
};

export default genDiff;
