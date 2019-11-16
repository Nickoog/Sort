import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';

const numbersCollection = new NumbersCollection([-10980, 3, -4, 0]);
const sorter = new Sorter(numbersCollection);
sorter.sort();

console.log(numbersCollection.data);
