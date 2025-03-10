function solution(score) {
    let answer = [];
    let sortedArr = [];
    
    for(let i = 0; i < score.length; i++) {
        let sum = 0;
        score[i].map(i => sum += i);
        answer.push(sum / 2);
    };
    
    sortedArr = [...answer].sort((a, b) => b - a);
    
    return answer.map((i) => sortedArr.indexOf(i) + 1);
    
    
}