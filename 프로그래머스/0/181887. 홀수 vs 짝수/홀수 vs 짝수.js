function solution(num_list) {
    let even = 0;
    let odd = 0;
    
    // 짝수번째
    for(let i = 0; i < num_list.length; i+=2) {
        even += num_list[i];
    }
    
    // 홀수번째
    for(let j = 1; j < num_list.length; j+=2) {
        console.log(num_list[j]);
        odd += num_list[j];
    }
    
    return even > odd ? even : odd;
}