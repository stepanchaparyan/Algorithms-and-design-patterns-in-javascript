function selectionSort(array) {
    const len = array.length;
    // Iteration of array till last element 
    for (let i = 0; i < (len - 1); i++) {
        let minElemIndex = i;
        for (let j = i + 1; j < (len - i); j++) {
            // Check for min element and override min element index
            if (array[j] < array[minElemIndex]) {
                minElemIndex = j;
            }
        }
        // Swap elements
        let temp = array[i];
        array[i] = array[minElemIndex];
        array[minElemIndex] = temp;
    }
    return array;
}
selectionSort([5, 4, 2, 6, 7])
// Output : [ 2, 4, 5, 6, 7 ]