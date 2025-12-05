let arr = [10,20,30,40,50];
for(let i=0;i<=4;i++){
    console.log(arr[i]);
}

arr.forEach((marks)=>{
    console.log(marks);
});

//for each 
//take each value one by one and do the operation and print
//NOT return the  array
let marks = [45,67,89];
marks.forEach((marks)=>{
    console.log("mark",marks);
}); // ← this was missing

//map
//take each value one by one and do the operation and print
//RETURNS a new array
let numbers = [1,2,3,4];
let doubled = numbers.map((num) => num * 2);
console.log("doubled:", doubled);

//filter
//creates a new array with elements that pass a test
//RETURNS a new array with filtered elements
let scores = [85,92,78,96,88];
let highScores = scores.filter((score) => score >= 90);
console.log("high scores:", highScores);
