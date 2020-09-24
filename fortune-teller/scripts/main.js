document.querySelector("header >h1").innerText = "Fortune Teller";
document.querySelector("header > h2").innerText = "Company Tagline";

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive 
  }

  let month = getRandomIntInclusive(1, 12);
  let fortune = getRandomIntInclusive(1, 5);
  let date = getRandomIntInclusive(1, 30);

  function createMonthName(month) {
    let name 
    switch (month) {
        case 1:
            name = "January";
            break;
        case 2:
            name = "February";
            break;
        case 3:
            name = "March";
            break;
        case 4:
            name = "April";
            break;
        case 5:
            name = "May";
            break;
        case 6:
            name = "June";
            break;
        case 7:
            name = "July";
            break;
        case 8:
            name = "August";
            break;
        case 9:
            name = "September";
            break;
        case 10:
            name = "October";
            break;
        case 11:
            name = "November";
            break;
        case 12:
            name = "December";
            break;
        default:
            name = "The future is unknown";
            break;
    }
    return name;
  }


  function readFortune(fortune) {
    let message 
    switch (fortune) {
        case 1:
            message = "homework deadlines will be sneaking up on you.";
            break;
        case 2:
            message = "it will rain in the Pacific Northwest.";
            break;
        case 3:
            message = "your computer will need to update and restart.";
            break;
        case 4:
            message = "hurricane season will be on its way.";
            break;
        case 5:
            message = "Nintendo will change Pikachu to blue. He will be surprised.";
            break;
        default:
            message = "the future is unknown";
            break;
    }
    return message;
  }

  const monthName = createMonthName(month);
  const fortuneMessage = readFortune(fortune);

  const fortuneTold = `On ${monthName} ${date}, ${fortuneMessage}`;
  console.log(fortuneTold);

  document.querySelector("#ReadFortune").innerText = fortuneTold;

  