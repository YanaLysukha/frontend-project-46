import yaml from 'js-yaml';

const getParse = (fileData, extension) => {
  switch (extension) {
    case 'JSON':
      return JSON.parse(fileData);
    case 'yml':
      return yaml.load(fileData);
    case 'yaml':
      return yaml.load(fileData);
    default:
      throw new Error(`Unknown extension ${extension}`);
  }
};
export default getParse;
