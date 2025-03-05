function solution(my_strings, parts) {
    let answer = '';
    // let strArr = my_strings.split(",");
    // let partsArr = parts.split("");
    // console.log(partsArr);
    
    for(let i = 0; i < my_strings.length; i++) {
        answer += my_strings[i].slice(parts[i][0], parts[i][1] + 1);
    }
    
    return answer;
}