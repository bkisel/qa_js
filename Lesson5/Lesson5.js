//Reverse
let word = "Bohdan"
let revWord = word.split('').reverse().join('')
console.log(revWord);

//Polindrom
function isPolindrom(row){
    const leftRight = row.toLowerCase()
    console.log(leftRight)
    const rightLeft = leftRight.split('').reverse().join('')
    console.log(rightLeft)
    return leftRight === rightLeft

}
console.log(isPolindrom("otto"));
console.log(isPolindrom("Bohdan"));


//getPaired 
let arrNumbers = [1, 5, 10, 2, 3, 4, 6, 16];

arrNumbers.reverse().forEach(myNum => {
    if (myNum % 2 === 0){
        console.log(myNum)
    }
});

//Longest Prefix
let arrStr = ["flower","flow","flight"]
function findPrefix(arr){
    if (arr.length === 0) return ""

    let prefix = arr[0]

    for (let i=1; i<arr.length; i++){
        while (arr[i].indexOf(prefix) !==0){
            prefix = prefix.substring(0, prefix.length - 1)
            if (prefix === "") return ""
        }
    }
    return prefix
}

console.log(findPrefix(arrStr));