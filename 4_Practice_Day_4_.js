// Understand Alert (Pop-up: alert()), prompt(), and confirm()

// Alert displays an alert message on the page.
// alert("something is wrong!");
// alert() shows a popup in the browser
// console.log() prints messages in the browser console (inspect → console tab)

alert("Hey You Really Learning JS");
console.log("This is a simple Alert");


// Basically Here There Are Three Thing 
// 1- alert()
// 2- prompt()
// 3- confirm()


// 1- alert()
// Here There Is Only one Option That Is Ok If browser Throw This Type Of Pop-up Usser Have Only Option to Select here That Is  " oK "


//2- promt():
// Why this is use :
// This Is Use To take Input In Alert type Pop-up Massage 
// Here input box come User want to write something can be write 

let name = prompt("Hey You Want To Write Ok Enter the Your Number");
console.log(name);

//3- confirm()
//we ask form user yes/no (OK/Cancel) type Selection answer 

let result = confirm("Are You Sure");
console.log(result);