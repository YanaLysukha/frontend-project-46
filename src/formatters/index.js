import getStylish from './stylish.js';
import getPlain from './plain.js';

const chooseFormatter = (tree, format = 'stylish') => {
  switch (format) {
    case 'plain':
      return getPlain(tree);
    case 'stylish':
      return getStylish(tree);
    default:
      throw new Error(`Unknown ${format}`);
  }
};
export default chooseFormatter;
