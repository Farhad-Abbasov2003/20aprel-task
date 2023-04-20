let array = [52,125,34,231,67,869,2398];
let count = {threedigit:0 , others:0};
for (let i = 0; i < array.length; i++){
    if(array[i]<1000 & array[i]>99){
        count.threedigit++;
    }
    else{
        count.others++;
    }
}
console.log(count);