import { readFile, writeFile } from 'fs';


readFile('./data.json', 'utf-8', (err, data) => {
    const dataObj = JSON.parse(data)
    console.log("data object", dataObj);
});

const newProperty = {
    name: 'Bob'
};

writeFile('./data.json', JSON.stringify(newProperty), (err, data) => {
    console.log("Write file completed.", err);
});