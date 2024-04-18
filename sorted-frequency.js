function sortedFrequency(arr, n) {
    if(n < arr[0] || n > arr[arr.length - 1]) return -1; 
    let first = findFirst(arr, 0, arr.length-1, n);
    let last = findLast(arr, 0, arr.length-1, n);

    return (last - first) + 1;
}

function findFirst(arr, l, r, n){
    let m;
    while(l <= r){
        m = Math.floor( (l+r)/2 );

        if(m === 0 || n > arr[m - 1] && arr[m] == n) return m;

        if (arr[m] < n){
            l = m + 1;
        } else{
            //arr[m] >= n
            r = m - 1;
        }
    }
}

function findLast(arr, l, r, n){
    let m;
    while(l <= r){
        m = Math.floor( (l+r)/2 );
        
        if(m === arr.length - 1 || n < arr[m + 1] && arr[m] == n) return m;

        if (arr[m] > n){
            r = m - 1;
        } else{
            //arr[m] >= n
            l = m + 1;
        }
    }
}

module.exports = sortedFrequency