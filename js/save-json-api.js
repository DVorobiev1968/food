const fs = require('node-fs');
const getDb = require('../db');

const db = getDb();

fs.mkdir('./dist/static/db', () => {
  for (let [key, value] of Object.entries(db)) {
    fs.writeFile(
      `./dist/static/db/db.json`,
      JSON.stringify(value),
      (err) => {
        if (err) throw err;
      }
    );
  }
});