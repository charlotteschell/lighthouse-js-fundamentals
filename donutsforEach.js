var donuts = ["jelly donut", "chocolate donut", "glazed donut"];

donuts.forEach(function(donut,index) {
  donut += " hole";
  donut = donut.toUpperCase();
  donuts[index] = donut;
});
console.log(donuts);
