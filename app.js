// _____________________________________________ DATE / DAYS
const day = document.querySelector("#date");

let date = new Date();
let dayDate = date.getDay();

switch (dayDate) {
  case 0:
    day.innerText = "Duminică";
    break;

  case 1:
    day.innerText = "Luni";
    break;

  case 2:
    day.innerText = "Marți";
    break;

  case 3:
    day.innerText = "Miercuri";
    break;

  case 4:
    day.innerText = "Joi";
    break;

  case 5:
    day.innerText = "Vineri";
    break;

  case 6:
    day.innerText = "Sâmbătă";
    break;
}

// ______________________________________________ TIME / HOUR
const hour = document.querySelector("#hour");
setInterval(() => {
  const d = new Date();
  const h = d.getHours();
  const m = d.getMinutes();
  hour.innerText = `${h}:${m}`;
}, 1000);

function time() {
  let clock = new Date();
  if (clock.getUTCMinutes() < 10) {
    let min = "0" + clock.getUTCMinutes();
    hour.innerText = `${clock.getUTCHours()}:${min}`;
  } else {
    hour.innerText = `${clock.getUTCHours()}:${clock.getUTCMinutes()}`;
  }
}

let refreshTime = setInterval(time, 1000);



// ___________________________________________ SEARCH function
const city = document.querySelector("#city");
const image = document.querySelector("#image");
const degrees = document.querySelector("#degrees");
const status = document.querySelector("#status");
const precipitations = document.querySelector("#precipitations");
const humidity = document.querySelector("#humidity");
const wind = document.querySelector("#wind");
const risk = document.querySelector("#risk");
const input = document.querySelector("#search");

const error = document.querySelector(".modal");
const timeBox = document.querySelector("#time-box");

const right = document.querySelector(".right-box");

let preview = ["rainy-animation"];

function searching() {
  timeBox.innerHTML = "";

  for (let i in dataBase) {

    if (input.value.toLowerCase() === dataBase[i].city) {
      city.innerText = dataBase[i].city.toUpperCase();
      image.src = dataBase[i].image;
      degrees.innerText = dataBase[i].degrees;
      status.innerText = dataBase[i].status;
      precipitations.innerText = dataBase[i].precipitations;
      humidity.innertext = dataBase[i].humidity;
      wind.innerText = dataBase[i].wind;
      risk.innerText = dataBase[i].risk;

      // ANIMATION
      preview.push(dataBase[i].animation);
      document.querySelector(`.${preview[preview.length - 1]}`).style.display = "block";
      document.querySelector(`.${preview[preview.length - 2]}`).style.display = "none";

      // WEATHER BY HOUR
      for (let x in dataBase[i].hour) {
        timeBox.innerHTML += `
        <div class="card">
          <span id="clock0">${dataBase[i].hour[x].clock}</span>
          <img src="${dataBase[i].hour[x].pic}" class="icon0">
          <p id="deg0">${dataBase[i].hour[x].temp}</p>
        </div>`;
      }
    }
  }
}
