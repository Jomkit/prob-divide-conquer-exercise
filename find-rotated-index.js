function findRotatedIndex(arr, n, l = 0, r = arr.length-1) {
    // crest is the index where the highest number meets the lowest number
    let crest = findCrest(arr, l, r);

    let m = Math.floor((l+r)/2);
    //check mid. If arr[m] == n, return m
    if(arr[m] == n) return m;

    if(arr[l] < n){
        // n is between left and crest
        return binarySearch(arr, n, l, r = crest);
    } else{
        // arr[l] > n, n is between crest and right
        return binarySearch(arr, n, l = crest + 1, r);
    }
    
}

function binarySearch(arr, n, l, r){
    //Basic binary search
    if(l >= r) return -1;
    
    let m = Math.floor((l+r)/2);
    if(arr[m] === n) return m;
    if(arr[m] < n){
        // mid less than n, check right side
        return binarySearch(arr, n, l = m + 1, r);

    } else if(arr[m] > n){
        // mid greater than n, check left side
        return binarySearch(arr, n, l, r = m - 1);
    }
    
}

function findCrest(arr, l, r){
    let m = Math.floor((l+r)/2);
    // console.log("inside findCrest", m);
    
    if(arr[m] > arr[m + 1]) return m;
    
    if(arr[l] > arr[r]){
        if(arr[l] < arr[m]){
            //arr[l] < arr[m], check right
            return findCrest(arr, l = m, r);
        } else{
            //arr[l] > arr[m], check left side
            return findCrest(arr, l, r = m);
        }
    }
}

module.exports = findRotatedIndex