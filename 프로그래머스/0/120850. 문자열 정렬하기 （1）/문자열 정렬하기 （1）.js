function solution(my_string) {
    let str = my_string.split("");
    let strFiltered =  str.filter((i) => !isNaN(i));
    let toNumber = strFiltered.map((i) => parseInt(i));
    return toNumber.sort((a, b) => a - b);
}