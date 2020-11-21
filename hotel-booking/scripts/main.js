function getHotelData() {
    const promise = fetch("./hotel.json")

    const resolve = function (httpResponse) {
        console.log('got a response')
        return httpResponse.json();
    }

    function reject(error) {
        console.error(error);
    }

    return promise
        .then(resolve)
        .catch(reject); 
}

// async function getHotelData() {
//     try {
//         const response = await fetch("./hotel.json");
//         return await response.json();
//     } catch (error) {
//         console.error(error)
//     }
// }

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
    document.querySelector("#hotelDisplay").textContent = `${hotelChoice.name}`;
}

