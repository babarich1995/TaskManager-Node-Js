// const amount= 12;

// if(amount<10){
//     console.log("Hey Small number")
// }else{
//     console.log('Hey large number')
// }

// console.log(__dirname)
// setInterval(()=>{
//     console.log("Hello World")
// },1000);
const os = require('os');

const user =os.userInfo();
console.log(user);

console.log(`The system uptime is ${os.uptime()} seconds`)

const currentOs={
    name:os.type(),
    release:os.release(),
    memory:os.totalmem(),
    freememory:os.freemem()
}

console.log(currentOs)