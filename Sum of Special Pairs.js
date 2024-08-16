/*
Description
Write a program to find thesumof the absolute difference between all such pairs (A[i], A[j]) such that i < j and ( j-i ) is prime.

Sample Input 1 
6
1 2 3 5 7 12

Sample Output 1
45

Hint
Pairs whose i<j and j-i is prime are :-

1. 1 3 [i=0, j=2] , Difference is 2.

2. 1 5[i=0, j=3] ,Difference is 4.

3. 1 12[i=0, j=5] ,Difference is 11

4. 2 5[i=1, j=3],Difference is  3.

5. 2 7[i=1, j=4],Difference is 5.

6. 3 7 [i=2, j=4],Difference is 4.

7. 3 12[i=2, j=5],Difference is 9

8. 5 12 [i=3, j=5],Difference is 7

Sum of all differences is2+4+11+3+5+4+9+7 = 45.
 */

function sumOfSpecialPairs(N,A){
    //write code here
    let sum = 0
    for(let i=0; i<N-1; i++){
        for(let j=i+1; j<N; j++){
            let x = isPrime(i,j)
            if(i<j && x== true){
                // console.log("i,j :",i,j, "and A[i],A[j] :",A[i],A[j])
                sum += Math.abs(A[i]-A[j]) 
            }
        }
    }
    console.log(sum)
}

function isPrime(i,j){
    let num = (j - i);
    if (num <= 1) {
        return false; // 0 and 1 are not prime numbers
    }
    let count = 0;
    for (let k = 2; k < num; k++) {  
        if (num % k == 0) {
            return false; // Not a prime number if divisible
        }
    }
    return true; // No divisors found, it's prime
}