const fs=require('fs');

console.log('1.Start of script');

//sychronus (blocking) operation
console.log('2.Reading the file syunchronusly');
const dataSync= fs.readFileSync('user-details.txt', 'utf8');
console.log('3.Synchronus read complete');

//asynchronus(non-blocking) operation
console.log('4. Reading file Asynchronusly');
fs.readFile('user-details.txt', 'utf8', 
    (err, dataAsync)=>{
        if (err) throw err;
        console.log('6. Asynchronus read complete');
    }
);

console.log('5. End of script');



