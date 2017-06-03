const path = require('path');
const fs = require('fs');

function find(where, which) {
  where = where.split(path.sep);
  if (where.length === 0) {
    throw new Error(`${which} not find in ${where}`);
  }
  where.pop();

  const dir = where.join(path.sep);
  try {
    fs.statSync(path.resolve(dir, which));
    return dir;
  } catch (e) {}

  return find(dir, which);
}

module.exports = find;
