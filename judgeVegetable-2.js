function judgeVegetable(veggies, characteristic){
  let max = 0;
  for(let veggie of veggies){
    if (veggie[characteristic] > max){
      max = veggie[characteristic];
    }
  }

  for (let veggie of veggies){
    if (veggie[characteristic] === max){
      return veggie.submitter;
    }
  }
}

const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness'

console.log(judgeVegetable(vegetables, metric));