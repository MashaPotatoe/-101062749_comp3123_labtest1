
//remove the log files

// if file exists remove it, output file names to delete
//delete log directory

//create the log files

var fs = require('fs');

var logDir = './logs';

if(!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir);
}
//create the 10 files :) i know its not the best but i did them 1 at a time  
//currentlog = fs.appendFile('./logs/mylog9.txt', 'log number 9 in the directory', function (error){
 //   if (error) throw error;
  //  console.log(`log was saved!`)
//})

//const readLog = fs.readdirSync(logDir);
//console.log('The logs are these ones :D', readLog)


//fs.open('mylog1.txt', 'r');

currentLog = fs.appendFile('./logs/mylog5.txt', 'log number 5', (error) => {
    if (error) throw error;
    console.log('log was saved!');
});

//removingLog = fs.rmSync('./logs/mylog5.txt')

fs.readdirSync(logDir, function (error, logs) {
    if (error){
        console.log('theres an error')
    }
    logs.logDir.forEach(logs => { 
        const removeLogs = fs.rmSync('./logDir');
        console.log(`Deleted ${logs}`);
    });
})

