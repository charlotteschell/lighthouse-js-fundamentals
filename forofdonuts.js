var donuts = [ 'jelly donut', 'chocolate donut', 'glazed donut' ];
for (let donut of donuts){
  let pos = donuts.indexOf(donut);
  donut += " hole";
  donut = donut.toUpperCase();
  console.log(donut);
  donuts[pos] = donut;
};
console.log(donuts);