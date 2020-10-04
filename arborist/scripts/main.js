document.querySelector("header >h1").innerText = "The Arborist";
document.querySelector("header > h2").innerText = "The best time to plant a tree was 20 years ago. The second best time is now.";

// Create an array of 4 trees; Display to page
let trees = ["oak", "Magnolia", "apricot", "Hawthorn"];
const errorElement = document.querySelector("#error");
const displayResults = document.querySelector("#displayResults");
const displayTree3 = document.querySelector("#tree3");
const displayTree4 = document.querySelector("#tree4");

const listTrees = () => {
    let treeList = "";
     trees.forEach(tree => {
         treeList += `${tree} <br>`
     })
     displayResults.innerHTML = `${treeList} <span> Total:  ${trees.length} items`;
}

listTrees();

// manipulate the array with the buttons on the html file
    //adding a redwood tree to the top of the array

    //adding a pear tree to the end of the array
document.querySelector("#addPear").onclick = () => {
    trees.push("pear");
    listTrees();
}

    //add a redwood to the top of the array
    document.querySelector("#addRedwood").onclick = () => {
        trees.unshift("redwood");
        listTrees();
    }
    
    // remove first tree, check for errors and display on the page
    document.querySelector("#removeFirstTree").onclick = () => {
        if (trees.length !==0) {
            trees.shift()
        } else {
            errorElement.textContent = "No tree to remove";
        }
        listTrees();
    }

        //remove second tree and check for errors to display
    document.querySelector("#removeSecondTree").onclick = () => {
        if (trees.length >= 2) {
            trees.splice(1,1);
        } else {
            errorElement.textContent = "No tree to remove";
        }
        listTrees();
    }

    //remove the last tree and check for errors to display
    document.querySelector("#removeLastTree").onclick = () => {
        if (trees.length!==0){
            trees.pop();
        } else {
            errorElement.textContent = "No tree to remove";
        }
        listTrees();
    }

    //make all text lowercase
    document.querySelector("#lowerCase").onclick = () => {
        trees = trees.map(trees => trees.toLowerCase()); //immutable
        console.log(listTrees);
        listTrees();
    }

    document.querySelector("#sortTrees").onclick = () => {
        trees.sort((left, right) => {
            const L = left.toLowerCase();
            const R = right.toLowerCase();
            if(L < R) return -1;
            if(L > R) return 1;
            return 0;
        });
        console.log(listTrees);
        listTrees();
    }

    //display the name of the third tree
    document.querySelector("#nameTree3").onclick = () => {
        if (trees.length >=3) {
            tree3 = trees[2];
            displayTree3.textContent = tree3
        } else {
            errorElement.textContent = "Not enough trees in list";
            displayTree3.textContent = ""
        }
        listTrees();
    }

    //display the name of the fourth tree
    document.querySelector("#nameTree4").onclick = () => {
        if (trees.length >=4) {
            tree4 = trees[3];
            displayTree4.textContent = tree4
        } else {
            errorElement.textContent = "Not enough trees in list";
            displayTree4.textContent = ""
        }
        listTrees();
    }



// document.querySelector("")