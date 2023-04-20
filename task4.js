let reverseArray = (arr) => {
    for(let i = 0; i < arr.length / 2; i++){
    
    [arr[i], arr[arr.length - i - 1]] = [arr[arr.length - i - 1], arr[i]];
    }
  
  return arr;
}
console.log(reverseArray([1, 2, 3, 4, 5]));