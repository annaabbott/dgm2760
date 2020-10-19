document.querySelector("header >h1").innerText = "Pizza Emporium";
document.querySelector("header > h2").innerText = "Molto delizioso";

let message

const pizza = {
    crust: "regular",
    topping : "pepperoni",
    size : "small",
    buildPizza: function() {
        console.log("buildPizza method was called");
        message = `To make a ${pizza.size} pizza on a ${pizza.crust} crust with ${pizza.topping} and cheese,`
        document.querySelector("#choicesFeedback").textContent = message
    },
    writeList: () => {
        console.log("writeList method was called");
        let flour = 3;
        if (pizza.crust === "thin") flour /= 2;
        if (pizza.size === "small") flour /= 2;
        let cheese = 2;
        if (pizza.size === "large") cheese *=2;
        //do the same for size large
        message = `you will need to purchase ${flour} cups of flour, ${cheese} cups mozzerella cheese, and 8 oz. of sliced ${pizza.topping}.`
        document.querySelector("#listFeedback").textContent = message

    }
};


document.querySelector("#regularCrust").addEventListener("click", () => pizza.crust = "regular");
document.querySelector("#thinCrust").addEventListener("click", () => pizza.crust = "thin");

document.querySelector("#pepperoni").addEventListener("click", () => pizza.topping = "pepperoni");
document.querySelector("#tomato").addEventListener("click", () => pizza.topping = "tomato");

document.querySelector("#small").addEventListener("click", () => pizza.size = "small");
document.querySelector("#large").addEventListener("click", () => pizza.size = "large");


document.querySelector("#buildBtn").addEventListener("click", pizza.buildPizza);
document.querySelector("#listBtn").addEventListener("click", pizza.writeList);
