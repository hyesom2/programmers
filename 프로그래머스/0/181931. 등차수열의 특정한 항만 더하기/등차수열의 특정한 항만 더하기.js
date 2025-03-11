function solution(a, d, included) {
    console.log(a, d);
    let answer = 0;
    let arr = [a]; // arr = [3]
    
    for(let i = 1; i < included.length; i++) {
        arr[i] = arr[i - 1] + d;
    }
    for(let j = 0; j < included.length; j++) {
        if(included[j]) {
            answer += arr[j];
        };
    }
    
    return answer;
}