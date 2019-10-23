// function sayHello() {
//   for (let i = 0; i < 1000; i++) {
//     console.log("Hello");
//   }
//   return "Hello 1000 times";
// }
// function sayWorld() {
//   for (let i = 0; i < 1000; i++) {
//     console.log("World");
//   }
//   return "World 1000 times";
// }

// console.log(1);
// console.log(2);
// console.log(3);

// const foo = sayHello();
// // foo ?
// console.log(foo);
// const bar = sayWorld();
// // bar ?
// console.log(bar);

// console.log(4);

// console.clear();

// console.log(1);
// setTimeout(function() {
//   console.log(2);
// }, 10000);
// console.log(3);

// setTimeout(function() {
//   console.log(4);
//   setTimeout(function() {
//     console.log(6);
//   }, 1500);
// }, 3000);

// for (let i = 0; i < 1000; i++) {
//   //
// }

// console.log(5);

let i = 0;

const intervalId = setInterval(function() {
  console.log(intervalId);
  i++;
  if (i >= 5) {
    clearInterval(intervalId);
  }
}, 1000);

// const otherIntervalId = setInterval(greetFernando, 1000);

// function greetFernando() {
//   console.log("Hello Fernando!");
// }

// Create a countdown with DOM Manipulation
// - create an html element with document.createElement()
// - in that element display a number going from 10 to 0, decrementing every second
// - after the countdown has reached 0, display an image of your choice

window.onload = function() {
  const h1 = document.createElement("h1");
  document.body.appendChild(h1);

  let counter = 10;
  h1.innerText = counter;
  h1.style.textAlign = "center";

  const interval = setInterval(function() {
    counter--;

    console.log(counter);
    h1.innerText = counter;

    if (counter <= -1) {
      clearInterval(interval);

      document.body.removeChild(h1);

      const img = document.createElement("img");
      img.setAttribute(
        "src",
        "https://media1.giphy.com/media/w3J7mstYCISqs/giphy.gif?cid=790b76113afe08f4514040d57a8cf458a7ae7f545531d826&rid=giphy.gif"
      );

      document.body.appendChild(img);

      // img.className = "foo bar baz";
      // img.classList.add('foo')
      // img.classList.add('bar')
    }
  }, 1000);
};
