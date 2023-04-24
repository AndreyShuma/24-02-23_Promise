const express = require('express');
const fs = require('fs');

const server = express();

console.log("Run srver >>>>");
// fs.readFile('/reade/text.txt','UTF-8', (err, data) => {
fs.readFile(`${__dirname}/reade/text.txt`,'UTF-8', (err, data) => {
    console.log('data', data);

    const newData = '==' + data + ' Shumeiko';
    fs.writeFile('./reade/text.txt', newData, () => {
        console.log('Stop File-1');
    });
    fs.readFile(`${__dirname}/reade/text2.txt`,'UTF-8', (err, data) => {
        console.log('data2', data);
    
        const newData = '==' + data + ' Shumeiko2';
        fs.writeFile('./reade/text2.txt', newData, () => {
            console.log('Stop File-2');
        });
        fs.readFile(`${__dirname}/reade/text3.txt`,'UTF-8', (err, data) => {
            console.log('data3', data);
        
            const newData = '==' + data + ' Shumeiko3';
            fs.writeFile('./reade/text3.txt', newData, () => {
                console.log('Stop File-3');
            });
        });
    });
});

server.listen(3000);

