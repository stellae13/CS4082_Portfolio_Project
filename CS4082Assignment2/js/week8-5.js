
  

document.getElementById("Details").innerHTML="Final product: 100x100 Grid.";


function addVariableSquare(myUniqueID,myParent,mySize,myColour)
{

var myID="square" + myUniqueID;

 var stringToWrite = `<div id=${myID} style='background:${myColour}; width:${mySize}px; height:${mySize}px;' onmouseover=getElementById('${myID}').style.background='black'  onmouseout=getElementById('${myID}').style.background='${myColour}'>`;

 document.getElementById(myParent).innerHTML+=stringToWrite;
 return 1;
}


function addVariableSquareClickToDraw(myUniqueID,myParent,mySize,myColour)
{

var myID="square" + myUniqueID;

 var stringToWrite = `<div id=${myID} style='background:${myColour}; width:${mySize}px; height:${mySize}px;' onmousedown=getElementById('${myID}').style.background='black' >`;
 document.getElementById(myParent).innerHTML+=stringToWrite;
 return 1;
}

function addVariableSquareDraw(myUniqueID,myParent,mySize,myColour)
{

var myID="square" + myUniqueID;

 var stringToWrite = `<div id=${myID} style='background:${myColour}; width:${mySize}px; height:${mySize}px;' onmouseover=getElementById('${myID}').style.background='black' >`;

 document.getElementById(myParent).innerHTML+=stringToWrite;
 return 1;
}

function addVariableSquareDrawRandom(myUniqueID,myParent,mySize,myColour)
{

var myID="square" + myUniqueID;
var myRevealColour=getRandomColour();
 var stringToWrite = `<div id=${myID} style='background:${myColour}; width:${mySize}px; height:${mySize}px;' onmouseover=getElementById('${myID}').style.background='${myRevealColour}' >`;

 document.getElementById(myParent).innerHTML+=stringToWrite;
 return 1;
}


function getRandomColour() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  

function buildGrid(gridWidth,gridHeight,squareSize)
{

var i = 0;
while(i<gridHeight) {
    var rowID="row" + i;
    console.log(rowID);
    document.getElementById("mainDIV").innerHTML+=`<div id='${rowID}' style="display:flex"></div>`;
    var j = 0;
    while(j<gridWidth) {
        squareID=`${i}${j}`;
        addVariableSquareDrawRandom(squareID,rowID,squareSize,"red");
        j++;
    }
    i++;
}
}

function processForm()
{
    height=document.getElementById("myForm").gridHeight.value;
    width=document.getElementById("myForm").gridWidth.value;
    square=document.getElementById("myForm").squareSize.value;
    console.log("In process form with " + width + " rows and" + height + " cols and " + square + " sized squares");
    buildGrid(width,height,square);

}


//buildGrid(100,11);