function solution(my_string, index_list) {
    let answer = [];
    
    for(let i = 0; i < index_list.length; i++) {
        let index = index_list[i];
        answer.push(my_string[index]);
    }
    
    return answer.join("");
}