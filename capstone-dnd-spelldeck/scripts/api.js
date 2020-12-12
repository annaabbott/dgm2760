const apiRoot = "https://www.dnd5eapi.co/api"                  // to do this file:
                                                                // ask api for spells by class.
async function getSpellsByClass(className) {
    try {
        const result = await fetch(`${apiRoot}/classes/${className}/spells`);
        return await result.json();
    } catch (err) {
        throw new Error(`Error fetching list of ${school} spells for level ${level}: ${err.message}`);
    }
}

// function getSpellsByClass(characterClass) {              
//     const url = `${apiRoot}/classes/${characterClass}/spells`;
//     console.log('url:', url)
//     const p1 = fetch(url);
//     console.log('fetching...');
//     p1.then(
//         result => { 
//             console.log('got the response...')
//             const pp = result.text()
//             return pp
//         },
//         err => {
//             console.error(err);
//             Promise.reject(`Error fetching list of spells for ${characterClass}s: ${err.message}`);
//         }
//     )
//     .then(
//         text => {
//             console.log('got data', text)
//             return JSON.parse(text);
//         },
//         err => {
//             console.error(err);
//             Promise.reject(`Error parsing data`);
//         }
//     )
// }                                                                //ask api for spells by level.                                                        

async function getSpellsByLevel(level) {
    try {
        const result = await fetch(`${apiRoot}/spells?level=${level}`);
        return await result.json();
    } catch (err) {
        throw new Error(`Error fetching list of spells for level ${level}: ${err.message}`);
    }
}  

async function searchSpells(characterClass, level) {                    //write function to find which spells are in both lists. 
    const spellsByClass = await getSpellsByClass(characterClass);       // Create array of these.
    const spellsByLevel = await getSpellsByLevel(level);  
    const spells = [];
    
    for (let byLevel of spellsByLevel.results) {
        for (let byClass of spellsByClass.results) {
            if (byClass.name == byLevel.name) {
                spells.push(byLevel);
                break;
            }
        }
    }
    return spells;
}

                                                                     