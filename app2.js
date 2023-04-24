const fs = require('fs');
const fsPromise = fs.promises;
console.log('RUN');

const run = async () => {
    const data1 =await fsPromise.readFile(`${__dirname}/reade/text.txt`,'UTF-8');

    const newData = '111-' + data1 + '-222';

    await fsPromise.writeFile(`${__dirname}/reade/text.txt`, newData);
    console.log('Await RUN1');

    
    //file 2
    const data2 =await fsPromise.readFile(`${__dirname}/reade/text2.txt`,'UTF-8');

    const newData2 = '111-' + data2 + '-222';

    await fsPromise.writeFile(`${__dirname}/reade/text2.txt`, newData2);
    console.log('Await RUN2');

    //file 3
    const data3 =await fsPromise.readFile(`${__dirname}/reade/text3.txt`,'UTF-8');

    const newData3 = '111-' + data3 + '-222';

    await fsPromise.writeFile(`${__dirname}/reade/text3.txt`, newData3);
    console.log('Await RUN3');
};

run();