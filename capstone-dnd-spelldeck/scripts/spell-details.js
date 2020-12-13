class SpellDetails {
    constructor(details) {
        this.details = details;
    }

    makeCard() {
        const cardDiv = document.createElement("div");
        const header = document.createElement("h3");
        header.textContent = this.details.name;
        cardDiv.appendChild(header);
        for (const text of this.details.desc) {
            const p = document.createElement("p");
            p.textContent = text;
            cardDiv.appendChild(p);
        }
        return cardDiv;
    }
}