function solution(answers) {
    const answer = [];
    const user1 = [1,2,3,4,5];
    const user2 = [2,1,2,3,2,4,2,5];
    const user3 = [3,3,1,1,2,2,4,4,5,5];
    const user1Length = user1.length;
    const user2Length = user2.length;
    const user3Length = user3.length;
    
    const score =[0,0,0];
    
    for (let i=0; i<answers.length; i++){
        if(user1[i % user1Length] === answers[i]) score[0]++;
        if(user2[i % user2Length] === answers[i]) score[1]++;
        if(user3[i % user3Length] === answers[i]) score[2]++;
    }

    const maxScore = Math.max(...score);
    for (let i=0; i < score.length; i++){
        if(score[i] === maxScore) answer.push(i+1);
    }
    
    return answer;
}