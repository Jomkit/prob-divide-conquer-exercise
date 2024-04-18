function findRotationCount(arr, l = 0, r = arr.length - 1) {
    // no rotation
    if(arr[0] < arr[arr.length - 1]) return 0;

    let crest = findCrest(arr, l, r);
    
    return crest;
}

function findCrest(arr, l, r){
    if(l > r) return;
    let m = Math.floor( (l+r)/2 );

    if(arr[m] > arr[m + 1]) {
        return m + 1;
    } else if(arr[m] > arr[l]){
        //natural order, crest is in right
        return findCrest(arr, l = m, r);
    } else{
        // mid is less than, left, crest is in left
        return findCrest(arr, l, r = m);
    }
}

module.exports = findRotationCount