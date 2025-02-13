function solution(num_list, n) {
    let answer = [];
    
    let sliceList = num_list.slice(n);
    let restList = num_list.slice(0, n);
    answer = [...sliceList, ...restList];
    
    return answer;
}