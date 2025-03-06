function solution(myString, pat) {
    let answer = '';
    let lastIndex = myString.lastIndexOf(pat) + pat.length;
    
    for(let i = 0; i < lastIndex; i++) {
        answer += myString[i];
    }
    
    return answer;
}