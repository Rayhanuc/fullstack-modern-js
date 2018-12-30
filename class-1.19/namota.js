/*
১.১৯ - লুপ প্রোজেক্ট
*/


let num = +process.argv[2];
if(!Number.isInteger(num)) {
    console.log("The provided value is not a number.");
    process.exit();
}

for(let i = 1; i <=10; i++) {
    console.log(`${num}x${i} = ${num*i}`);    
}


