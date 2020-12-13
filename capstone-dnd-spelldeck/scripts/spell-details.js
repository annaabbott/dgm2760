class SpellDetails {
    constructor(details) {
        this.details = details;
    }

    makeCard() {
        const cardDiv = document.createElement("div");
        const header = document.createElement("h3");
        header.textContent = `${this.details.name} (Level ${this.details.level})`;
        cardDiv.appendChild(header);
        // const level = document.createElement("p");
        // header.textContent = `Spell Level: ${this.details.level}`;
        // cardDiv.appendChild(level);
        const castingTime = document.createElement("p");
        castingTime.textContent = `Casting Time: ${this.details.casting_time}`;
        cardDiv.appendChild(castingTime);
        const range = document.createElement("p");
        range.textContent = `Range: ${this.details.range}`;
        cardDiv.appendChild(range);
        const duration = document.createElement("p");
        duration.textContent = `Duration: ${this.details.duration}`;
        cardDiv.appendChild(duration);
        for (const text of this.details.desc) {
            const p = document.createElement("p");
            p.textContent = text;
            cardDiv.appendChild(p);
        }
        
        return cardDiv;
    }
}