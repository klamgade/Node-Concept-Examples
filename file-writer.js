import { writeFile } from 'fs';


const newProperty = {
    name: 'Bob'
};

writeFile('./data.json', JSON.stringify(newProperty), (err) => {
    console.log("Write file completed.", err);
});