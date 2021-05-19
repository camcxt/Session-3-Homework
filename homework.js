//Bài 1
// Write a script to ask users enter a sequence of numbers, the Numbers are separated 
// by commas, calculate the sum of the numbers and show it to users

const input =  (prompt("Nhập mảng bai 1: ")) ;
const arr= (input.split(','));
sum = 0;
console.table(arr);
for (let i = 0; i < arr.length; i++) {
    sum = sum + Number(arr[i]);  
}
alert(`Tổng mảng ${sum} `);


// Bài 2
// Write a script asking users to enter a sequence of numbers, the numbers are separated by commas, 
// find the smallest number and log it out to users 

let input2 =  (prompt("Nhập mảng bai 2: ")) ;
let arr2= (input2.split(','));
console.log(arr2);
min = Number(arr2[0]);
let i = arr2.length;
  while (i--) {
    if (Number(arr2[i]) < min) {
      min = arr2[i];
    }
} 
alert(`Phần tử nhỏ nhất là: ${min} `);  


// Bài 3
// Create an array containing at least 5 numbers, then ask users enter a number,
// perform a search to look for the number in the array, if the number is found, 
// tell user that with the index of it in the array, if not, also tell them so
//  arr = [3, 4, 6, -9, 10, -88, 2];

const arr3 = [3, 4, 6, -9, 10, -88, 2];
let input3 =  Number(prompt("Nhập một số bai 3: "));
for (let i = 0; i < arr3.length; i++) {
   if (input3 === arr3[i]) {
       alert(`${input3} được tìm thấy trong mảng tại index ${i}`);
       i = arr3.length;  
    } else {
       alert(`${input3} không được tìm thấy trong mảng `); 
       i = arr3.length;  
    }     
}


// Bài 4
// You are a shepherd who owns a flock of sheep
// Each of your sheep of your flock has varied sizes:
// Create an array to represent the sizes of your flock,
//  and log all of your flock size, expected screen output:

//

var arr4 = [5, 7 , 300, 90, 24, 50, 75];
console.log(arr4);
console.log(`Hello, my name is Cam and here is my sheep sizes: 
${arr4.join(" ")}`);
console.log("");

//
console.log(`Now my biggest sheep has size ${Math.max.apply(null, arr4)}, let's shave it`);
console.log("");

//
arr4[arr4.indexOf(300,)] = 8;
console.log(`after shearing, here is my flock 
${arr4.join(" ")}`);
console.log("");

//
for (let a = 1; a < 5; a++) {
    for (let i = 0; i < arr4.length; i++) {
        arr4[i]= arr4[i]+50;    
    }
    console.log(`MONTH ${a} 
    one month has, passed, my sheep hane grown, here are their sizes: 
    ${arr4.join(" ")}`);
    console.log("");      
}
sum = 0;
for (let j = 0; j < arr4.length; j++) {
     sum = sum + arr4[j];   
}
console.log(`my flock has size in total: ${sum}`);
console.log(`I would get ${sum} * 2$ = ${sum*2}`);

//Bai 5

let input5 =  (prompt("Nhập mảng bai 5: "));
let arr5 = input5.split(",");
let array = [];
for (let i = 0; i < arr5.length; i++) {
    array.push("<"+arr5[i]+">")
    //console.log(array);
}
alert(` ${arr5} ==> ${array} `);

//Bai 6
let array6 = [];
let input6 =  (prompt("Nhập mảng bai 6: "));
let arr6 = input6.split(",");
for (let i = 0; i < arr6.length; i++) {
    if (Number(arr6[i]) % 2 == 1) {
       arr.push(arr6[i]);
       //console.log(arr);  
    }   
}
alert(` ${arr6} ==> ${array6} `);





