document.querySelector("header >h1").innerText = "Pizza Emporium";
document.querySelector("header > h2").innerText = "Molto delizioso";

let message

const pizza = {
    crust: "regular",
    topping : "pepperoni",
    size : "small",
    buildPizza: function() {
        console.log("buildPizza method was called");
        message = `Baking a pizza on a ${pizza.crust} crust with a topping and cheese`
        document.querySelector("#feedback").textContent = message
    },
    writeList: () => {
        console.log("writeList method was called");
        let flour = 1;
        if (pizza.crust === "regular") flour *= 2
        //do the same for size large
        message = `you will need to purchase ${flour} cups of flour and 1 lb of ${pizza.topping}.`
        document.querySelector("#feedback").textContent = message

    }
};

document.querySelector("#regularCrust").addEventListener("click", () => pizza.crust = "regular")
document.querySelector("#thinCrust").addEventListener("click", () => pizza.crust = "thin")


document.querySelector("#buildBtn").addEventListener("click", pizza.buildPizza)