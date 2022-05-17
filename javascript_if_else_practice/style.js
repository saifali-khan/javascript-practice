// switch (browser) {
//   case 'Edge':
//     alert( "You've got the Edge!" );
//     break;

//   case 'Chrome':
//   case 'Firefox':
//   case 'Safari':
//   case 'Opera':
//     alert( 'Okay we support these browsers too' );
//     break;

//   default:
//     alert( 'We hope that this page looks ok!' );
// }
// converting switch case statement to if else statement

let browser = prompt("");
if (browser === "edge") {
  alert("you've got the edge");
} else if (
browser === "chrome",
browser === "firefox", 
browser === "safari", 
browser === "opera") {
  alert("okay we support support these browsers too");
} else {
  alert("we hope that this page looks ok!")
}