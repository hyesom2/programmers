function solution(number) {
    let answer = 0;
    let arr = [...number];
    let sum = 0;
    
    for(let i = 0; i < arr.length; i++) {
        sum += parseInt(arr[i]);
    }
    
    return answer = sum % 9;
}