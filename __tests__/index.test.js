import { fileURLToPath } from 'url';
import { readFileSync } from 'fs';
import path, { dirname } from 'path';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filepath) => path.join(__dirname, '..', '__fixtures__', filepath);
const readFile = (filepath) => readFileSync(getFixturePath(filepath), 'utf-8');

const expectedStylish = readFile('expectedStylish.txt');

test('genDiff-test', () => {
  const fileBefore = '__fixtures__/file1.json';
  const fileAfter = '__fixtures__/file2.json';
  expect(genDiff(fileBefore, fileAfter)).toEqual(expectedStylish);
});
