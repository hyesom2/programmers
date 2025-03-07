function solution(babbling) {
    let answer;
    let strArr = ["aya", "ye", "woo", "ma"];
    let count = 0;
    
    for(let i = 0; i < babbling.length; i++) {
        answer = babbling[i];
        
        for(let j = 0; j < strArr.length; j++) {
            answer = answer.replace(strArr[j], "1");
        }
        
        answer = answer.replaceAll("1", "");
        if (answer === "") {
            count++;
        }
    }
    
    return count;
}