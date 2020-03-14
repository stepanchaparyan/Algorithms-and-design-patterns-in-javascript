function insertionSort(array) {
  const len = array.length;
  // Iteration of array till last element 
  for (i = 0; i < len; i++) {
      let j = i;
      // Iterate over the sorted part of array and insert the element
      while (j >= 0 && array[j] < array[j - 1]) {
          let temp = array[j];
          array[j] = array[j - 1]
          array[j - 1] = temp;
          j--;
      }
  }
  return array;
}