function loopyLighthouse(range, multiples, words){
  for(let i = range[0]; i <= range[1]; i++){
    let multiple1 = multiples[0];
    let multiple2 = multiples[1];
    if(i % multiple1 === 0 && i % multiple2 === 0){
      console.log(words[0] + words[1]);
    }else if(i % multiple1 === 0){
      console.log(words[0]);
    }else if(i % multiple2 === 0){
      console.log(words[1]);
    }else{
      console.log(i);
    }
  }
}


loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);

