

async function displaySpells() {
    document.querySelector("#displaySpellsList").textContent = "";

    try{
        const characterClass = document.querySelector("#characterClass").value;
        const level = document.querySelector("#level").value;
        const spells = await searchSpells(characterClass, level);
        console.log(spells)
        spells.forEach(result => {
            const spellDiv = document.createElement("div");
            spellDiv.textContent = result.name;
            spellDiv.id = result.index;
            document.querySelector("#displaySpellsList").appendChild(spellDiv);
            spellDiv.addEventListener("click",() => showSpellDescription(result));
        });
    } catch (err) {               
        console.error(err)                                    // create a div that displays error messages.
        giveFeedback(err.message);
    }
}

async function showSpellDescription(spellInfo) {
    const details = await getSpellInfo(spellInfo.index);
    console.log(details)
    const spellDesc = document.querySelector("#spellDescription");
    spellDesc.textContent= "";
    const card = new SpellDetails(details);
    const cardDiv = card.makeCard();

    const button = document.createElement("button")
    button.addEventListener("click", () => {
        const spellBook = document.querySelector("#cardDeck");
        spellBook.classList.remove("hidden");
        const newCard = card.makeCard();
        newCard.classList.add("card");

        spellBook.appendChild(newCard);
    
    });
    button.textContent = "Add to my Deck";
    cardDiv.appendChild(button);
    spellDesc.appendChild(cardDiv);
}


function giveFeedback(statusText) {
    if (statusText) {
        document.querySelector("#feedback").textContent = statusText;
    } else {
        document.querySelector("#feedback").textContent = "";
    }
}



function main() {
    let characterClass = document.querySelector("#characterClass");         //to do this file:
    let spellLevel = document.querySelector("#level");                     //wire display spells button to event handler
    let displaySpellsBtn = document.querySelector("#spellsListBtn")          // display spells in displaySpellsList div, index file
                                                                            // find discription of spell, add to displaySpellsList div.
    displaySpellsBtn.addEventListener("click", displaySpells);
}                                                                       // wire add to my deck button to event handler
                                                                        // create elements, innerHTML to display lvl, casting time, components,
main();                                                                 // range, duration, ritual, concentration, desc, at higher levels