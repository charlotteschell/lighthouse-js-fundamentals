var donuts = ["jelly donut", "chocolate donut", "glazed donut"];

var improvedDonuts = donuts.map(function(donut,index) {
  donut += " hole";
  donut = donut.toUpperCase();
  return donut;
});
console.log(improvedDonuts);
