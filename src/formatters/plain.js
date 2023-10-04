import _ from 'lodash';

const getValue = (value) => {
  if (_.isObject(value)) {
    return '[complex value]';
  }
  if (typeof (value) === 'string') {
    return `'${value}'`;
  }
  return `${value}`;
};

const getPlain = (tree) => {
  const iter = (data, path) => {
    const filteredData = data.filter(({ status }) => status !== 'unupdated');
    const result = filteredData.map((node) => {
      const {
        key, value, children, status, oldValue, newValue,
      } = node;
      const newPath = path.concat(key);
      switch (status) {
        case 'added':
          return `Property '${newPath.join('.')}' was added with value: ${getValue(value)}`;
        case 'removed':
          return `Property '${newPath.join('.')}' was removed`;
        case 'updated':
          return `Property '${newPath.join('.')}' was updated. From ${getValue(oldValue)} to ${getValue(newValue)}`;
        case 'nested':
          return iter(children, newPath);
        default:
          throw new Error(`The ${status} is not defined!`);
      }
    });
    return result.join('\n');
  };
  return iter(tree, []);
};

export default getPlain;
