function solution(s) {
    let answer = '';
    let arr = s.split(" ").map((i) => +i);
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    
    return answer = `${min} ${max}`
}