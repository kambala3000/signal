const { parse } = require('csv-parse');
const fs = require('fs');

const csvToArray = async (pathToCsv, options = {}) =>
  new Promise((resolve, reject) => {
    const data = [];
    fs.createReadStream(pathToCsv)
      .pipe(parse({ delimiter: ',', columns: true, ltrim: true, ...options }))
      .on('data', function (row) {
        data.push(row);
      })
      .on('end', function () {
        resolve(data);
      })
      .on('error', function (error) {
        reject(error.message);
      });
  });

/** Transforms CSV data to js arrays and saves them to .js file */
const generateData = async () => {
  const servingsData = await csvToArray('src/csv-data/servings_per_day-en_ONPP.csv');
  const foodData = await csvToArray('src/csv-data/foods-en_ONPP_rev.csv', { encoding: 'latin1' });
  const generatedFileData =
    `export const SERVINGS_DATA = ${JSON.stringify(servingsData)};` +
    `\n` +
    `export const FOOD_DATA = ${JSON.stringify(foodData)};`;

  fs.writeFileSync('src/generated/index.ts', generatedFileData);
};

generateData();
