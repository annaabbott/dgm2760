document.querySelector("#companyName").innerText = "Joe's Bed and Breakfast";
document.querySelector("header > h2").innerText = "Providing Good Nights and Good Mornings";

let currentDate = new Date();
document.querySelector("#date").innerText = currentDate.toDateString();

let userName = prompt("What is your name?");
let message = `Hello, ${userName}, we're glad you're here. Come and stay for awhile. `;
document.querySelector("#greeting").innerText = message;