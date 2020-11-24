
async function getHotelData() {
    try {
        const response = await fetch("./hotel.json");
        return await response.json();
    } catch (error) {
        console.error(error)
    }
}

let hotelData = {};
const promise = getHotelData();

promise.then(function (data) {
    console.log('got the data')
    hotelData = data;
});


document.querySelector("#fawltyTowers").addEventListener("click",hotelInfo)
document.querySelector("#grandBudapest").addEventListener("click",hotelInfo)
document.querySelector("#greatNorthernHotel").addEventListener("click",hotelInfo)

function hotelInfo(event) {
    if (!hotelData.hotels) {
        return;
    }

    let hotelChoice = hotelData.hotels.find(hotel => {
        return event.target.id === hotel.id
    });
    console.log(hotelChoice);
    document.querySelector("#hotelImg").setAttribute("src", hotelChoice.picture);
    document.querySelector("#hotelName").textContent = `${hotelChoice.name}`;
    document.querySelector("#hotelRooms").textContent = `Rooms: ${hotelChoice.rooms} total ${hotelChoice.roomTypes[0]}, ${hotelChoice.roomTypes[1]}, and/or ${hotelChoice.roomTypes[2]} (Call for availability).`;
    document.querySelector("#gym").textContent = `Gym available? ${hotelChoice.gym}`;
    document.querySelector("#meeting").textContent = `Conference Room? ${hotelChoice.meeting}`;
    document.querySelector("#address").textContent = `Location: ${hotelChoice.address}`;
    document.querySelector("#phone").textContent = `Phone: ${hotelChoice.phone}`;
}

