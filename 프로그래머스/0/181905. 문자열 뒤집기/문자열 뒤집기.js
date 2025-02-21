function solution(my_string, s, e) {
    let answer = '';
    let slicedText = my_string.slice(s, e + 1).split('').join('');
    let reversedText = my_string.slice(s, e + 1).split('').reverse().join('');
    
    answer = my_string.replace(slicedText, reversedText);
    
    return answer;
}