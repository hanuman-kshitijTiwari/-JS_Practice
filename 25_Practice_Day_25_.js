//Question - Solving 
//1- Print Odd number 

let arr = [1,2,3,4,5,7,8,9,6,10,11,12];
for(let i=0;i<arr.length;i++){
    if(arr[i]%2 == 1){
        console.log("Even Number is ",i);
    }
    else{
         console.log("Odd Number is ",i);
    }
}


//Question Print all Multiplaction Table 

let num0 = 5;

for (let j = 1;j <= 10; j++) {
  console.log(num0 * j);
}

// proper formate 
let num = 5;

for (let i = 1; i <= 10; i++) {
  console.log(num + " x " + i + " = " + (num * i));
}