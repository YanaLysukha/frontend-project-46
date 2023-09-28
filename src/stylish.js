const makeStylish = (tree) => {
  const result = tree.map((obj) => {
    const chars = { added: '+ ', removed: '- ', unchanged: '  ' };
    const { key, value, oldValue, newValue, status } = obj;
    switch (status) {
      case 'unupdated':
        return `  ${chars.unchanged} ${key}: ${value}`;
      case 'removed':
        return `  ${chars.removed} ${key}: ${value}`;
      case 'added':
        return `  ${chars.added} ${key}: ${value}`;
      case 'updated': {
        const str1 = `  ${chars.removed} ${key}: ${oldValue}`;
        const str2 = `  ${chars.added} ${key}: ${newValue}`;
        return `${str1}\n${str2}`;
      }
    }
  }).join('\n');
  return `{\n${result}\n}`;
};
export default makeStylish;