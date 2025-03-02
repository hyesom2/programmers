function solution(my_string, num1, num2) {
    let strSplit = my_string.split("");
    let str1 = strSplit[num1];
    let str2 = strSplit[num2];
    
    strSplit[num1] = str2;
    strSplit[num2] = str1;
    
    return strSplit.join("");
}