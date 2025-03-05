function solution(myString, pat) {
    let answer = 0;
    let strArr = myString.split("");
    
    for(let i = 0; i < strArr.length; i++) {
        strArr[i] === "A" ? strArr[i] = "B" : strArr[i] = "A";
    }
    strArr = strArr.join("");
    
    return strArr.includes(pat) ? answer = 1 : answer = 0;
}