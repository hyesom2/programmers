function solution(s) {
    let answer = [];
    let newStr = s.split('');
    
    for(let i = 0; i < s.length; i++) {
        if(s.indexOf(newStr[i]) === s.lastIndexOf(newStr[i])) {
            answer.push(newStr[i]);
        }
    }
    
    return answer.sort().join("");
}