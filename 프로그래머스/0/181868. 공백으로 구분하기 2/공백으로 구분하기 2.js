function solution(my_string) {    
    let str = my_string.split(" ").filter(i => i !== "");
    
    return str;
}