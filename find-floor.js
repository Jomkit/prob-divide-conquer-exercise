function findFloor(arr, x) {
    // [4, 5, 9, 12], x=3, return -1
    if(x < arr[0]) return -1;

    // return largest value that is less than or equal to x
    let l = 0;
    let r = arr.length - 1;
    let m;
    if(arr[r]<=x) return arr[r];

    while(l < r){
        m = Math.floor((l+r)/2);
        if(arr[m]==x) break;

        if(arr[m] <= x) {
            l = m+1;
        } else{
            r = m - 1;
        }
    }
    console.log("l", l, "r", r, 'm', m);
    
    return arr[m];
  
}

module.exports = findFloor