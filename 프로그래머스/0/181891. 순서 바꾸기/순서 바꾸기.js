function solution(num_list, n) {
    let answer = [];
    
    let sliceList = num_list.slice(n);
    let lastList = num_list.slice(0, n);
    answer = [...sliceList, ...lastList];
    
    return answer;
}