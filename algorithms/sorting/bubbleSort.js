function bubbleSort(array) {
  const len = array.length;
  // Iteration of array till last before element 
  for (let i = 0; i < (len - 2); i++) {
      // Iteration of array till last before element 
      for (j = 0; j < (len - 2); j++) {
          if (array[j] > array[j + 1]) {
              //Swap the consecutive elements 
              let temp = array[j];
              array[j] = array[j + 1];
              array[j + 1] = temp;
          }
      }
  }
  return array;
}

const input = [5, 4, 2, 6, 7];
const result = bubbleSort(input);
// Expected Output: [ 2, 4, 5, 6, 7 ]