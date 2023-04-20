let array = [12,34,23,67,89];
let count = {odd:0 , even:0};
for (let i = 0; i < array.length; i++) {
  if(array[i]%2==0){
    count.even++;
  }
  else{
    count.odd++;
  }
}
console.log(count);