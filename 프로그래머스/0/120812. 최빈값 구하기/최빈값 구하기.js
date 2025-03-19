function solution(array) {
    let counts = [];  
    let maxCount = 0; 
    let mode = -1;      
    let isDuplicate = false;
    
    for (let i = 0; i < array.length; i++) {
        let num = array[i];
        counts[num] = (counts[num] || 0) + 1;

        if (counts[num] > maxCount) {
            maxCount = counts[num];
            mode = num;
            isDuplicate = false;
        } else if (counts[num] === maxCount) {
            isDuplicate = true;
        }
    }
    
    return isDuplicate ? -1 : mode;
}
