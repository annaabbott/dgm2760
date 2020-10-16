document.querySelector("header >h1").innerText = "Nonsense Story";
document.querySelector("header > h2").innerText = "Adventures in Wonderland";

const storyParagraph = document.querySelector("#story");

document.querySelector("#storyBtn").onclick = () => {
    let nouns = document.querySelector("#nouns").value;
    let nounArray = nouns.split(/\s+/)
    let nounArrayLowered = nounArray.map(nouns => nouns.toLowerCase());
    console.log(nouns);
    console.log(nounArray);

    let verbs = document.querySelector("#verbs").value;
    let verbArray = verbs.split(/\s+/);
    let verbArrayLowered = verbArray.map(verb => verb.toLowerCase());
    console.log(verbs);
    console.log(verbArray);

    let adjs = document.querySelector("#Adjectives").value;
    let adjArray = adjs.split(/\s+/);
    let adjArrayLowered = adjArray.map(adj => adj.toLowerCase());

    console.log(adjs);
    console.log(adjArray);

    const x = "hello \
    world";

    let prebuiltStory = `Either the <span>${nounArrayLowered[0]}</span> was very deep, or Alice fell very slowly, for she had plenty of time as she went down to <span>${verbArrayLowered[0]}</span> about her, and to wonder what was going to happen next. First she tried to <span>${verbArrayLowered[2]}</span> down and make out what she was coming to, but it was too <span>${adjArrayLowered[0]}</span> to <span>${verbArrayLowered[1]}</span> anything; then she looked at the sides of the well, and noticed that they were filled with <span>${nounArrayLowered[1]}s</span> and <span>${nounArrayLowered[2]}s;</span> here and there she saw maps and pictures hung upon pegs. She took down a jar from one of the shelves as she passed; it was labeled <span>${adjArrayLowered[0]}</span> <span>${nounArrayLowered[3]},</span> but to her great disappointment it was <span>${adjArrayLowered[2]}.</span>`
    storyParagraph.innerHTML = prebuiltStory;


    return nouns;
}


// build verbArray
// build adjArray

//function tellStory 
    // build a template string, substituting array values by index.
    // all changes (adding suffixes, etc) can be added in the template string.


// attach the reference to the DOM with the id.

//One function to rule them all.  That's it!



