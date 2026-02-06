/*function signature/sample */
function  analyzeText(str) {
    // You have to write your code here

    if (typeof str !== 'string' || str === '') {
        return 'Invalid';
    }

    const words = str.split(' ');
    const characters = str.split('');

    let token = 0 ;
    for (let chr of characters){

        if (chr.includes(' ') !== true) {
            
            token ++ ;

        }
    }


    let longwords = '';
    for( let word of words){
         
        if (word.length > longwords.length ) {
           
            longwords = word ;
            
        }
    }

    return {
        longwords ,
        token
    }
    
}


const s = analyzeText("I am a little honest person");
console.log(s);
