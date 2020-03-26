function laugh(num){
    let answer = "";
    const oneha = "ha";
    for(let i=1; i<=num; i++){
        answer += oneha; 
    }
    return answer + '!';
}

console.log(laugh(3));