function solution(spell, dic) {
    let answer = 0;
    let mainArr = [];
    
    for(let i = 0; i < dic.length; i++) {
        let subArr = [];
        for(let j = 0; j < spell.length; j++) {
            subArr.push(dic[i].includes(spell[j]));
        }
        mainArr.push(subArr);
    }
    return mainArr.filter((i) => !i.includes(false)).length === 1 ? answer = 1 : answer = 2;
}