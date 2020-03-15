function mergeSortedArrays(arr1, arr2) {
    if(arr1 === undefined || arr2 === undefined || typeof arr1 !== 'object' || typeof arr2 !== 'object') {
        throw new Exception("Bad Parameters");
    }
    if(arr1.length === 1) return arr2;
    if(arr2.length === 1) return arr1;
    let i = 0, j = 0, k = 0;
    const arr3 = [];
    while(i < arr1.length && j < arr2.length) {
        if(arr1[i] < arr2[j]) arr3[k++] = arr1[i++];
        else arr3[k++] = arr2[j++];
    }
    while(i < arr1.length) {
        arr3[k++] = arr1[i++];
    }
    while(j < arr2.length) {
        arr3[k++] = arr2[j++];
    }
    return arr3;
}

const merged = mergeSortedArrays([0,3,4,31], [3,4,6,30]);

console.log(merged);