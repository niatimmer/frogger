//To do: Strassendspeed function; automatische erstellung des strassenSpeeds anhand von Anzahl der Strassen

export function createCars() {
  const strassenSpeed1 = 0.3;
  const strassenSpeed2 = 0.4;
  const strassenSpeed3 = 0.5;
  const strassenSpeed4 = 0.6;
  const strassenSpeed5 = 0.7;
  const strassenSpeed6 = 0.8;
  const strassenSpeed7 = 0.9;
  const strassenSpeed8 = 1;

  let cars = [];
  let car1 = {
    x: -150,
    y: 635,
    height: randomCarHeight(),
    width: randomCarWidth(),
    colour: getRandomColor(),
    speed: strassenSpeed1,
  };
  let car2 = {
    x: 265,
    y: 635,
    height: randomCarHeight(),
    width: randomCarWidth(),
    colour: getRandomColor(),
    speed: strassenSpeed1,
  };
  let car3 = {
    x: 10,
    y: 580,
    height: randomCarHeight(),
    width: randomCarWidth(),
    colour: getRandomColor(),
    speed: strassenSpeed2,
  };
  let car7 = {
    x: 400,
    y: 580,
    height: randomCarHeight(),
    width: randomCarWidth(),
    colour: getRandomColor(),
    speed: strassenSpeed2,
  };
  let car4 = {
    x: 100,
    y: 520,
    height: randomCarHeight(),
    width: randomCarWidth(),
    colour: getRandomColor(),
    speed: strassenSpeed3,
  };
  let car8 = {
    x: -300,
    y: 520,
    height: randomCarHeight(),
    width: randomCarWidth(),
    colour: getRandomColor(),
    speed: strassenSpeed3,
  };
  let car5 = {
    x: 40,
    y: 390,
    height: randomCarHeight(),
    width: randomCarWidth(),
    colour: getRandomColor(),
    speed: strassenSpeed4,
  };
  let car9 = {
    x: 360,
    y: 390,
    height: randomCarHeight(),
    width: randomCarWidth(),
    colour: getRandomColor(),
    speed: strassenSpeed4,
  };
  let car6 = {
    x: 350,
    y: 335,
    height: randomCarHeight(),
    width: randomCarWidth(),
    colour: getRandomColor(),
    speed: strassenSpeed5,
  };
  let car10 = {
    x: -110,
    y: 335,
    height: randomCarHeight(),
    width: randomCarWidth(),
    colour: getRandomColor(),
    speed: strassenSpeed5,
  };
  let car11 = {
    x: -260,
    y: 218,
    height: randomCarHeight(),
    width: randomCarWidth(),
    colour: getRandomColor(),
    speed: strassenSpeed6,
  };
  let car12 = {
    x: 140,
    y: 218,
    height: randomCarHeight(),
    width: randomCarWidth(),
    colour: getRandomColor(),
    speed: strassenSpeed6,
  };
  let car13 = {
    x: -100,
    y: 160,
    height: randomCarHeight(),
    width: randomCarWidth(),
    colour: getRandomColor(),
    speed: strassenSpeed7,
  };
  let car14 = {
    x: 200,
    y: 160,
    height: randomCarHeight(),
    width: randomCarWidth(),
    colour: getRandomColor(),
    speed: strassenSpeed7,
  };
  let car15 = {
    x: 0,
    y: 98,
    height: randomCarHeight(),
    width: randomCarWidth(),
    colour: getRandomColor(),
    speed: strassenSpeed8,
  };
  let car16 = {
    x: 300,
    y: 98,
    height: randomCarHeight(),
    width: randomCarWidth(),
    colour: getRandomColor(),
    speed: strassenSpeed8,
  };
  cars.push(
    car1,
    car2,
    car3,
    car4,
    car5,
    car6,
    car7,
    car8,
    car9,
    car10,
    car11,
    car12,
    car13,
    car14,
    car15,
    car16
  );
  return cars;
}

function randomCarHeight() {
  let carHeight = Math.floor(Math.random() * (39 - 29)) + 29;
  return carHeight;
}

function randomCarWidth() {
  let carWidth = Math.floor(Math.random() * (61 - 39)) + 39;
  return carWidth;
}

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
    if (color == "#4f5152") {
      color += letters[Math.floor(Math.random() * 16)];
    }
  }
  return color;
}
