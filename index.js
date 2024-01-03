// // let name="prerak"
// // let age=18;
// // let ismarried=false;

// // console.log("person name is " + name + "and their age is " + age)

// // let ans=0;
// // for(let i=0;i<5;i++ ){
// //     ans=ans+i;
// // }
// // console.log(ans)
// // const age=[21,22,34,24,25]
// // for(let i=0;i<age.length;i++){
// //     if(age[i]%2==0)
// //     {
// //         console.log(age[i])
// //     }
// // }
// // const allUsers=[{//Array of object
// //   firstname:"prerak",
// //   gender:"male"  
// // },
// // {
// //     firstname:"kanika",
// //     gender:"female"   
// //   },
// //   {
// //     firstname:"priya",
// //     gender:"female"  
// //   }
// // ]
// // for(let i=0;i<allUsers.length;i++){
// //     if( allUsers[i]["gender"]=="male"){
// //         console.log(allUsers[i])
// //     }
// // }
// // // const user1={//Object
// // //     firstname:"prerak",  
// // //     gender:"male"
// // // }
// // // console.log(user1["gender"])
// //  function sum(num1,num2,fnToCall){//   Function callbacks  
// //     let result=num1+num2;
// //     fnToCall(result)
// //  }
// //  function displayResult(data){
// //     console.log("Result of the sum:" +data)
// //  }
// //  function displayPassive(data){
// //     console.log("sum's Result is:" + data);
// //  }
// //  const ans=sum(1,2,displayPassive)
// // function calculateArithmetic(a,b,arithmeticFinalFunction){ 
// //     const ans=arithmeticFinalFunction(a,b);
// //     return ans;
// // }
// // function sum(a,b){
// //     return a+b;
// // }
// // const value=calculateArithmetic(100,2,sum)
// // console.log(value)
// //  function greet(){
// //     console.log("hello")
// //  }
// //  setTimeout(greet,2*1000)// setTimeout function who delays the program running 
// //  setInterval(greet,1000)
//  /*
//   Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
//   What's Anagram?
//   - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
// */

// // /*
// //  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
// //  Example:
// //  - Input: [3, 7, 2, 9, 1]
// //  - Output: 9
// // */

// // function findLargestElement(numbers) {
// //     let max=numbers[0]
     
// //         for(let i=0;i<numbers.length;i++){
            
// //             if(max<numbers[i]){
// //             let temp=numbers[i];
// //             numbers[i]=max;
// //             max=temp;}
// //         }return max;
// //     }

// // let arr=[1,2,3,5,69,33]
// // let ans=findLargestElement(arr)
// // console.log(ans)
// /*
//   Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
//   Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

//   Once you've implemented the logic, test your code by running
// */

// // function countVowels(str) {
// //     let count=0;
// //    const str1=str.split('');
// //     for(let i=0;i<str1.length;i++){
// //         if( str1[i]==='a'|| str1[i]==='e'||str1[i]==='i'||str1[i]==='o'||str1[i]==='u'){
// // count++;
// //         }
// //     }return count;
// // }

// // let ans=countVowels("hellaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
// // console.log(ans)
// /*
//   Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
//   Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
// */

// // function isPalindrome(str) {
// //     const str1=str.toLowerCase();
// //     const str2=str1.split('').reverse().join('');
// //     if(str1===str2)
// //     return true;
// // else
// // return false;
// //   }
  
// // if(isPalindrome("tonde")){
// //     console.log("palindrome")
// // }
// // else{
// //     console.log("not palindrome")
// // }
// // function square(a){
// // return a*a;
// // }
// // function sumofSomething(a,b,fn){
// //   const val=fn(a)
// //   const val2=fn(b)
// //   return val+val2
// // }
// // const ans=sumofSomething(3,4,square)
// // console.log(ans)
// // function sayHello(name) {
// //   console.log("Hello, " + name + "!");
// // }

// // // Using setTimeout to schedule the execution of sayHello after 2000 milliseconds (2 seconds)
// // setTimeout(sayHello, 2000, "John");
// setTimeout(function(){
//   console.log("after 1 seconds")
// },1000)
let timeoutId = setInterval(function() {
  console.log("This will not be executed");
}, 2000);
clearInterval(timeoutId)

