document.querySelector("header >h1").innerText = "The Arborist";
document.querySelector("header > h2").innerText = "The best time to plant a tree was 20 years ago. The second best time is now.";

// Create an array of 4 trees; Display to page
const trees = ["oak", "Magnolia", "apricot", "Hawthorn"];
const errorElement = document.querySelector("#error");
const displayResults = document.querySelector("#displayResults");

const listTrees = () => {
    let treeList = "";
     trees.forEach(tree => {
         treeList += `${tree} <br>`
     })
     displayResults.innerHTML = `${treeList} <span> ${trees.length} items`;
}

listTrees();
// manipulate the array with the buttons on the html file

// check for errors and display on the page