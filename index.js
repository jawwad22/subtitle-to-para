//https://www.youtube.com/watch?v=PYEKepqdi9A
console.log("Upper wali youtube dekh liyo");
//subititile ko copy ker ka subtitle mein paste ker diyo or jis pattern mein subtitle hain wesa
//hee paste keryo.... WEBVTT araha hoga usko remove ker diyo
//folder location mein cmd khol ker 
//"node index.js" ki command chala diyo without colons
const fs = require('fs');
const { Console } = require('console');

function isEmpty(str) {
    return (!str || str.length === 0);
}
function init(){
    try {
        const data = fs.readFileSync('subtitle.txt', 'utf8')
        const array = data.split("\n");
        var newArray = [];
        var skip=false;
        for (let index = 0; index < array.length; index++) {
            var item=array[index];
            if (item.includes("-->")) {

            }else if(skip==true){
                skip=false;
            }
           
            else {
                newArray.push(item);
                skip=true;
            }
        }
        var paragraph = "";
        for (let i = 0; i < newArray.length; i++) {
            paragraph=paragraph+newArray[i].slice(0,-1)+" "
        }

        fs.writeFileSync('paragraph.txt', paragraph);
    } catch (err) {
        console.error(err)
    }
}
init();

