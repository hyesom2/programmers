function solution(my_string) {
    let answer = '';
    let str = my_string.split("");
    for(let i = 0; i < str.length; i++) {
        if(i === str.indexOf(str[i])) {
            answer += str[i]
        }
    }
    return answer;
}