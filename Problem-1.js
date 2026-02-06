/*function signature/sample */
function newPrice(currentPrice , discount ) {
    
    if (typeof discount !== 'number' || typeof currentPrice !== "number" || discount < 0 || discount > 100)  {
        return 'Invalid'

    } else {
        const discountAmount =(currentPrice * discount ) / 100 ;
        const finalFinalPrice = (currentPrice - discountAmount).toFixed(3) ;
        return finalFinalPrice ;  
    }
    
}



