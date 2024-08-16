/*
Masai Palindromic Substring Ended
Description
You are provided a stringS.
Write a program that returns length of the longest palindromic substring of that string.

Sample Input 1 
thisracecarisgood

Sample Output 1
7

Hint
Sample 1 Explanation

The given string contains a palindromic substring which is, "racecar" and it is of largest length(7) among all other palindromic substrings.

Hence the output is 7
*/

function masaiPalSubString(S){
    //write code here
 
    let max = -Infinity
    for(let i=0; i<S.length; i++){
        let bag = ""
        for(let j=i; j<S.length; j++){
            bag += S[j]
            let x = check(bag)
            if(x && max < bag.length){
                    max = bag.length
            }
        }
    }
    console.log(max)
}

function check(str){
    let bag = ""
    for(let i=str.length-1; i>=0; i--){
        bag += str[i]
    }
    if(bag == str){
        return true
    }
    return false
}