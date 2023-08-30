const cars = [
  {
    id: 1,
    name: bmw,
    motor: 4.4,
    opisanye: "бэха класс",
  },
  {
    id: 2,
    name: mers,
    motor: 6.0,
    opisanye: "мерседест",
  },
  {
    id: 3,
    name: audi,
    motor: "2.5tdi",
    opisanye: "аудзи 2 и пяць",
  },
  {
    id: 4,
    name: toyota,
    motor: 3.0,
    opisanye: "кэмри трёха",
  },
];

const cata = document.getElementById("catalog");
let result = "";
cars.forEach((car) => {
  result += ` 
  <div class="card">
     <h3 class="car_id">${car.id}</h3>
     <h4 class="car_name">${car.name}</h4>
     <p class="car_motor">${car.motor}</p>
     <h3 class="car_opisanye">${car.opisanye}</h3>
  </div>
  `;
});
cata.innerHTML = result;

// for (var i = 0; i < items.length; i++) {
//   result += `
//   <div class="card">
//      <img src="${items[i].card_img}" class="card_img" />
//      <img src="${items[i].nalich_img}" class="nalich_img" />
//      <h3 class="card_name">${items[i].card_name}</h3>
