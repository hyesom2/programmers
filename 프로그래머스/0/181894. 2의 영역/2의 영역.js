function solution(arr) {
    let answer = [];
    let start = arr.indexOf(2);
    let end = arr.lastIndexOf(2);
    
    if(start === -1) {
        return [-1];
    } else {
        return arr.slice(start, end+1);
    }  
}