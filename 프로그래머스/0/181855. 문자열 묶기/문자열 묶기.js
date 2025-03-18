function solution(strArr) {
    let answer = {};
    let maxLength = Math.max(...strArr.map(i => i.length));
    
    for(let i = 1; i <= maxLength; i++) {
        const data = strArr.filter(item => item.length === i);
        
        answer[i] = data.length;
    }

    return Math.max(...Object.values(answer))
}