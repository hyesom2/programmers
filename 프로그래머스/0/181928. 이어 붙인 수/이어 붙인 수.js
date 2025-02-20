function solution(num_list) {
    let answer = 0;
    let odd = '';
    let even = '';
    
    for(let i = 0; i < num_list.length; i++) {
        if(num_list[i] % 2 === 0) {
            odd += num_list[i]
        } else {
            even += num_list[i]
        }
    }
    
    return Number(odd) + Number(even);
}

// function solution(num_list) {
//     let answer = 0
//     let even = [];
//     let odd = [];
    
//     for(let i = 0; i < num_list.length; i++){
//         if(i%2===0){
//             even.push(num_list[i])
//         } else {
//             odd.push(num_list[i])
//         }
//     }
    
//     comsole.log(Number(even.join("")) + Number(odd.join("")))
// }