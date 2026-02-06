/*function signature/sample */
function gonoVote(array) {
    
    //write your code here
    if (Array.isArray(array) === false) {
        return 'Invalid';
    }

    let yes = 0 ;
    let no = 0 ;

    for(let arr of array){

        const lowerCaseArr = arr.toLowerCase([array]);
        if (lowerCaseArr === 'ha') {
            yes ++ ;

        }else{
            no ++ ;
        }
    }

    if (yes > no ) {
        
        return true ; 
    } else if (yes === no) {
        
        return 'equal';
    } else{
        
        return false ;
    }
    

}

const a = gonoVote( ["ha", "na", 'ha',"ha"]);
console.log(a);


