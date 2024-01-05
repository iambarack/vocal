// process.stdout.write("Hello, World");
// process.stdout.clearLine(0);
// process.stdout.cursorTo(0);
// process.stdout.write("\n"); // end the line


// function printProgress(progress){
//     process.stdout.clearLine();
//     process.stdout.cursorTo(0);
//     process.stdout.write(progress + '%');
// }

// printProgress("test")
// printProgress("test2")

process.stdout.write('text');
setTimeout(function(){
process.stdout.write('\rtext2\n');

}, 100);

setInterval(() => process.stdout.write(`clock: ${new Date()}\r`), 1000);
console.log("hh");console.log("hh");console.log("hh");

setTimeout(function(){
console.log("xxx");
}, 100);