function solution(emergency) {
    let answer = [];
    let sortedArr = [...emergency].sort((a, b) => b - a);
    
    for(let i = 0; i < sortedArr.length; i++) {
        answer.push(sortedArr.indexOf(emergency[i]) + 1);
    }
    
    return answer;
}