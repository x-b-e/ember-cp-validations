import { isBlank } from '@ember/utils';

export default function getArray(arrayLike) {
  if (isBlank(arrayLike)) return [];
  if (Array.isArray(arrayLike)) return arrayLike;
  if (arrayLike.content) {
    let manyArray =  arrayLike.content;
    return isBlank(manyArray) ? [] : Array.from(manyArray);
  } else {
    return Array.from(arrayLike);
  }
}
