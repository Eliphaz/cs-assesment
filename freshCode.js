const addToZero = (arr) => {
    for(i = 0; i < arr.length; i++){
        for(j = 0; j < arr.length; j++){
            if(arr[i]+arr[j] == 0){
                return true
            }
        }
    }return false
}

console.log(addToZero([1, 2, 3]))

console.log(addToZero([1, 2, 3, -2]))

//this is a nested for loop that acsesses both all values in an array, for this reason it is o(n^2)

const hasUniqueChars = str => str == Array.from(new Set([...str])).join('')
   
//this uses the spread operator and array.from, both of which are o(n), i belive this is o(n), but not totally sure

alphabets = 'abcdefghijklmnopqrstuvwxyz'.split("");

const isPangram = (string) => {
    string = string.toLowerCase();
    return alphabets.every(x => string.includes(x));
}

//this is o(1) because it will always loop 26 times to check for the alphabet;

const findLongestWord = arr =>{
    biggestWord = 'a'
    for(i in arr) {
        if(arr[i].length > biggestWord.length){
            biggestWord = arr[i]
        }
    }return biggestWord}
    
console.log(findLongestWord(["hi", "hello"]))

// the time complexity for this is o(n) where n is the length of the array