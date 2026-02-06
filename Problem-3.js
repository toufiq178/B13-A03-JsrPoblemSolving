/*function signature/sample */
function finalScore (omr) {
    //write your code here

    // if (typeof omr.right !== "number" || typeof omr.wrong !== "number" || typeof omr.skip !== "number" ) {
    //     return 'Invalid'
    // }

    const totalQuestion = omr.right + omr.wrong + omr.skip ;
    
    if (totalQuestion !== 100 || typeof totalQuestion !== 'number') {
        return 'Invalid'
    }
    
    const rightAns = omr.right * 1 ;
    const wrongAns = omr.wrong * 0.5 ;
    const skipAns = omr.skip * 0 ; 

    const totalScore = (rightAns - wrongAns ) + skipAns ;
    const total = Math.round(totalScore);
    return total;
}


const obj = {"right":67,"wrong":23,"skip":10};
const omr = finalScore(obj);
console.log(omr);
