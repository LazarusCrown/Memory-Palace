//dateDictionary.js
//note: npm install xlsx --save
const xlsx = require('xlsx');
var workbook = xlsx.readFile('memoryDictionary.xlsx');
var worksheet = workbook.SheetNames[0];
var sheet1 = workbook.Sheets[worksheet];
const columns = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
let columnsArr = columns.split('')
var birthdateDict = [];
let rowHead = 'A1'
let rowNum = 1;
// Make sure the current row has data 
var currRowNum;
let nextRowExists = true;
while(nextRowExists === true){
  currRowNum = sheet1[rowHead].v;  
  console.log(currRowNum)
  let obj = {};
  let wordsArr = [];
  let colCount = 1;
  let keepGoing = true;
  while(keepGoing === true){  //  column increments until no value
    //get current cell's value: ex: B1
    var currentCell = columnsArr[colCount]+String(rowNum)
    var desiredCell = sheet1[currentCell];
    var currentWord = (desiredCell ? desiredCell.v : undefined)
    // console.log('desired_cell: ', desiredCell);
    // console.log('desired_value: ', currentWord);
    if(currentWord === undefined){
      keepGoing = false;  // undefined --> end while loop
    }else{
      colCount++;
      wordsArr.push(currentWord.trim());
    }
  }
  // push current #'s list of words into object
  obj[currRowNum] = wordsArr;
  console.log(obj[currRowNum])
  birthdateDict.push(obj) 
  rowNum++;
  rowHead = 'A'+String(rowNum); // go to the next row down
  //if next row exists, keep looping; else false
  nextRowExists = (sheet1[rowHead] ? true : false)
}
console.log(birthdateDict)
module.export = dateDictionary;

