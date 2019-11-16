import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';

const numbersCollection = new NumbersCollection([-10980, 3, -4, 0]);
const sortArrayOfNumber = new Sorter(numbersCollection);
sortArrayOfNumber.sort();

console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection('Xaayb');
const sortString = new Sorter(charactersCollection);
sortString.sort();

console.log(charactersCollection.data);
