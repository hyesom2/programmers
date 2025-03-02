function solution(myString) {
    let answer = [];
    
    let str = myString.split("x");
    answer = str.filter((i) => i !== "");
    
    return answer.sort();
}