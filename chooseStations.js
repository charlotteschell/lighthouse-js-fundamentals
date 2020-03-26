const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

const chooseStations = function (stations) {
  let goodStations = [];
  for(let station of stations){
    const capacity = station[1];
    const type = station[2];
    const name = station[0];
    if(capacity >= 20 && (type === 'school' || type === 'community centre')){
      goodStations.push(name);
    }
  }
  return goodStations;
}

console.log(chooseStations(stations));