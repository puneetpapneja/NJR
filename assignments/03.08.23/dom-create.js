//DOM create methods
//var newElement = document.createElement("p");
var newElement = document.createElement("h2");
//console.log(newElement);

var newText = document.createTextNode("This is just text");
//console.log(newText);

/* Dom Create  Comment*/
//var newComment = document.createComment("this is comment");
//console.log(newComment);



/* JavaScript AppendChild*/
//newElement.appendChild(newText);
//document.getElementById("test").appendChild(newElement);  
/* JavaScript  InsertBefore */
//var target = document.getElementById("test");
//target.insertBefore(newElement,target.childNodes[0]);



//  insertAdjacentElement Method
/*var newElement = document.createElement("h2");
var newText = document.createTextNode("This is just element");
newElement.appendChild(newText);
var target = document.getElementById("test");
target.insertAdjacentElement("afterbegin",newElement);*/

//  insertAdjacentHTML Method
/*var newElement = "<h2>This is just Html</h2>";
var target = document.getElementById("test");
target.insertAdjacentHTML("afterend",newElement);*/

//  insertAdjacentText Method
/*var newText = "<h2>This is just Text</h2>";
var target = document.getElementById("test");
target.insertAdjacentHTML("beforeend",newText);*/