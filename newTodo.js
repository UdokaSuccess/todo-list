let li = document.querySelectorAll('li');
let close = document.getElementsByClassName('close');
let ul = document.querySelector("ul")


function loading() {
	// body...
// Create a "close" button and append it to each list item
for (var i = 0; i < li.length; i++) {
	let del = document.createElement('span');
	let icon = document.createTextNode("del")
	del.classList.add("close")
	del.appendChild(icon)
	li[i].appendChild(del)
}

// add click event to the del icon
for(var i = 0; i < close.length; i++){
	close[i].addEventListener("click", function() {
		// body..
		let dis = this.parentNode;
		console.log("hi")
		dis.remove()
})
}

     ul.addEventListener("click", function (event) {
     	// body...
     	if (event.target.tagName === 'LI') {

     	event.target.classList.toggle("checked")}
     })



}
 
  //  to create a new todo
function newTodo() {
	// body...
	  let input = document.querySelector("input").value
	  let newInput = document.createElement("li")
	  let txtInput = document.createTextNode(input)
	newInput.appendChild(txtInput);
	if (input === "") {
		alert("Enter a todo")
	} else {
		ul.appendChild(newInput)
	}
	document.querySelector("input").value =  " " 



	let del = document.createElement('span');
	let icon = document.createTextNode('del');
	//var li = del.parentNode;
	del.classList.add("close")
	del.appendChild(icon)
	newInput.appendChild(del)

	for(var i = 0; i < close.length; i++){
	close[i].addEventListener("click", function() {
		// body..
		var dis = this.parentNode;
		console.log("hi")
		dis.remove()
})
}

}


window.onload = loading()























