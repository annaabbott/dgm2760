document.querySelector("header >h1").innerText = "Nonsense Story";
document.querySelector("header > h2").innerText = "Adventures in Wonderland";

storyParagraph = document.querySelector("#story");
// build nounArray
// build verbArray
// build adjArray

//function tellStory 
    // build a template string, substituting array values by index.
    // all changes (adding suffixes, etc) can be added in the template string.
function tellStory() {
    let story = document.querySelector("#storyBtn").onclick = () => {
        let prebuiltStory = `Either the well was very deep, or Alice fell very slowly, for she had plenty of time as she went down to look about her, and to wonder what was going to happen next. First she tried to look down and make out what she was coming to, but it was too dark to see anything; then she looked at the sides of the well, and noticed that they were filled with cupboards and bookshelves; here and there she saw maps and pictures hung upon pegs. She took down a jaw from one of the shelves as she passed; it was labeled ORANGE MARMALADE, but to her great disappointment it was empty.`
        storyParagraph.innerText = prebuiltStory;
    }
    


}
// attach the reference to the DOM with the id.

//One function to rule them all.  That's it!

tellStory();