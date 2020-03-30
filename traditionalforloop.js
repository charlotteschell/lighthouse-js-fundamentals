var donuts = [ 'jelly donut', 'chocolate donut', 'glazed donut' ];
let donutsUpper = [];
for (let i = 0; i < donuts.length; i++){
  donuts[i] += " hole";
  donuts[i] = donuts[i].toUpperCase();
  console.log(donuts[i]);
}
console.log(donuts);