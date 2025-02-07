function solution(intStrs, k, s, l) {
    let answer = [];
    for(let i = 0; i < intStrs.length; i++) {
        let result = Number(intStrs[i].slice(s, s+l));
        if(result > k) {
            answer.push(result);
        }
    }
    return answer;
}