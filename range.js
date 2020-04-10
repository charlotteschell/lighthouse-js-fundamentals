function range(start, end, step){
  let array = [];
  if (start <= end && step > 0){
    let num = (end - start) / step;
    for (let i = 0; i <= num; i++){
      array.push(start + i * step);
    }
    return array;
  } else {
    return array;
  }
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));
console.log(range(-5, 2, -3));