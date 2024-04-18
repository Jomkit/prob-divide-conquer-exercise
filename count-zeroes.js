function countZeroes(arr) {
    if(arr[0]===0) return arr.length;
    if(arr[arr.length-1]===1) return 0;

    let l = 0;
    let r = arr.length-1;
    let m; 
    
    while(l < r){
        m = Math.floor(((r-l)/2) + l);
        if(arr[l]===0){
            //left index has arrived at a 0
            // return arr.length - (l + 1);
            break;
        }else if(arr[m] === 0) {
            // m is zero but left is one, so r must be 0. Set r index to m index
            r = m;
        }else{
            // m === 1
            l = m + 1;
        }
    }
    return arr.length - l;
}

module.exports = countZeroes