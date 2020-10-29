function duplicateMenu() {
    // get anchors from primary nav ul
    let navAnchors = document.querySelectorAll("ul#primaryNavigation li a");
    
    // duplicate li for the secondary nav in footer 
    let footerUL = document.createElement("ul");
    navAnchors.forEach(currentItem => {
        let footerLI = document.createElement("li");
        let footerAnchor = document.createElement("a");
        footerAnchor.setAttribute("href", currentItem.getAttribute("href"));
        footerAnchor.textContent = currentItem.textContent;
        // copy textContent from primary to footerNav

        // append children to appear in DOM
        footerLI.appendChild(footerAnchor);
        footerUL.appendChild(footerLI);
    });
    let smallNavArea = document.querySelector("#smallNavArea");
    smallNavArea.appendChild(footerUL);
}

duplicateMenu()