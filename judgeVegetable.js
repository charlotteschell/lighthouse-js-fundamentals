function judgeVegetable(veggies, characteristic){
  let rankings = [];
  for(let veggie of veggies){
    let score = veggie[characteristic];
    rankings.push(score);
  }
  let sortedRank = rankings.sort((a,b)=>a-b);
  
  let highestRank = sortedRank[sortedRank.length - 1];
  for (let veggie of veggies){
    if (veggie[characteristic] === highestRank){
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