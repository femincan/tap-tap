import {
  key1,
  key2,
  key3,
  key4,
  key5,
  key6,
  key7,
  key8,
  key9,
} from '../assets';
import { extractAudioName } from '../utils';

type Pad = {
  key: string;
  source: string;
  name: string;
};

const keysArray: string[] = ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C'];

const padsArray: Pad[] = [
  {
    key: keysArray[0],
    source: key1.href,
    name: extractAudioName(key1.pathname),
  },
  {
    key: keysArray[1],
    source: key2.href,
    name: extractAudioName(key2.pathname),
  },
  {
    key: keysArray[2],
    source: key3.href,
    name: extractAudioName(key3.pathname),
  },
  {
    key: keysArray[3],
    source: key4.href,
    name: extractAudioName(key4.pathname),
  },
  {
    key: keysArray[4],
    source: key5.href,
    name: extractAudioName(key5.pathname),
  },
  {
    key: keysArray[5],
    source: key6.href,
    name: extractAudioName(key6.pathname),
  },
  {
    key: keysArray[6],
    source: key7.href,
    name: extractAudioName(key7.pathname),
  },
  {
    key: keysArray[7],
    source: key8.href,
    name: extractAudioName(key8.pathname),
  },
  {
    key: keysArray[8],
    source: key9.href,
    name: extractAudioName(key9.pathname),
  },
];

export { keysArray, padsArray };
