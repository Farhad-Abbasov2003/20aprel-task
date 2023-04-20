function power(m,n){
    let number=1
    for (let i = 0; i < n; i++) {
      number*=m
    }
    return number
}
console.log(power(2,3))
console.log(power(2,4))
console.log(power(2,5))