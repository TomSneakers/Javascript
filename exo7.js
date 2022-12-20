const myArray=[5,1,4,7,9,7,100,25,65]

    function descendingOrder(myArray){

        return myArray.sort(function(a,b){
            return b-a
        })
    
    }

    console.log(descendingOrder(myArray));

    //avec fonction flécher (plus court)

    const nbr=[100,50,69,43,1,2,3]
    
    nbr.sort((a, b) => b - a);

    console.log(nbr)