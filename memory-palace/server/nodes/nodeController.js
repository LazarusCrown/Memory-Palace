const Item = require('./todoModel');
const bodyParser = require('body-parser');

const nodeController = {};

/**
* getAllNodes
*
* @param next - Callback Function w signature (err, items)
*/
nodeController.getAllNodes = (req, res, next) => {
  Item.find({}, function(error, data){
    req.body.loadedNodes = data;
    next();
  });
};

/**
* createNode - create a new Node model and then save the user to the database.
*
* @param req - http.IncomingRequest
* @param res - http.ServerResponse
*/
nodeController.createNode = (req, res, next) => {
  
    let newNode = new Node;
    // console.log('createItem req.body: ', req.body);
    newNode.nodeNum = req.body.nodeNum;
    newNode.locX = req.body.locX;
    newNode.locY = req.body.locY;
    newNode.date = req.body.date;
    // word break down:
    newNode.monthWord = req.body.monthWord;
    newNode.dayWord = req.body.dayWord;
    newNode.baseYearWord = req.body.baseYearWord;
    newNode.endYearWord = req.body.endYearWord;
    // images:
    newNode.monthImg = req.body.monthImg;
    newNode.dayImg = req.body.dayImg;
    newNode.baseYearImg = req.body.baseYearImg;
    newNode.endYearImg = req.body.endYearImg;
    // image Arrays:
    newNode.monthImgArray = req.body.monthImgArray;
    newNode.dayImgArray = req.body.dayImgArray;
    newNode.baseYearImgArray = req.body.baseYearImgArray;
    newNode.endYearImgArray = req.body.endYearImgArray;
    

    // console.log('newNode to save: ', newNode);
    
    newNode.save(function(error){
      if(error){
        console.log('Error saving: ', {error});
      }else{
        // console.log('successfully saved node: ', req.body[0])
        res.addOn = 'hello from dB';
        next();
      }
    })
  };