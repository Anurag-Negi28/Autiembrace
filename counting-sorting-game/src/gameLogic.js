export function generateRandomArray(size) {
    const array = [];
    for (let i =  0; i < size; i++) {
      array.push(Math.floor(Math.random() *  100) +  1);
    }
    return array;
  }
  
  export function isArraySorted(array) {
    for (let i =  0; i < array.length -  1; i++) {
      if (array[i] > array[i +  1]) {
        return false;
      }
    }
    return true;
  }
  
  export function shuffleArray(array) {
    for (let i = array.length -  1; i >  0; i--) {
      const j = Math.floor(Math.random() * (i +  1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  export function swapElements(array, indexA, indexB) {
    [array[indexA], array[indexB]] = [array[indexB], array[indexA]];
    return array;
  }
  