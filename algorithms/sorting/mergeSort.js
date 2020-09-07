function mergeSort(arr){
  var len = arr.length;
  if(len <2)
     return arr;
  var mid = Math.floor(len/2),
      left = arr.slice(0,mid),
      right =arr.slice(mid);
  //send left and right to the mergeSort to broke it down into pieces
  //then merge those
  return merge(mergeSort(left),mergeSort(right));
}