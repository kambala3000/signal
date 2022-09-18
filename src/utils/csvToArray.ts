import { parseFile } from '@fast-csv/parse';

const csvToArray = () => {
  parseFile('./csv-data/servings_per_day-en_ONPP.csv')
    .on('error', error => console.error(error))
    .on('data', row => console.log(row))
    .on('end', (rowCount: number) => console.log(`Parsed ${rowCount} rows`));
};

export default csvToArray;
