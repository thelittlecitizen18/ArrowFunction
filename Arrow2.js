var arrs1 = [[1,2,3,4,5,7],[5,9,8,7,6],[4,8,7,2,1,9,3]];

function arrow(arrs){
    var newArr = [];
    for (i=0; i < arrs.length; i++){
        for(n=0; n < arrs[i].length; n++){
            if(arrs[i][n] % 2 == 0){
                
                newArr.push(arrs[i][n])
                
                
            }
        }
    }
    console.log(newArr)
}