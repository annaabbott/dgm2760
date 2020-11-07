document.querySelector("header >h1").innerText = "2020 Virtual Vacations";
document.querySelector("header > h2").innerText = "While the virus keeps us home, we can still pretend";

async function getHotelData() {
    try {
        const response = await fetch("./hotel.json");
        return await response.json();
    } catch (error) {
        console.error(error)
    }
}

let hotelData = {};

getHotelData().then(data => {
    return hotelData = data;
});
