/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];
  const randomNumbers = () => {
    let numeroPrimero = Math.floor(Math.random() * 3);
    let numeroSegundo = Math.floor(Math.random() * 3);
    let numeroTercero = Math.floor(Math.random() * 3);
    let numeroCuarto = Math.floor(Math.random() * 3);

    return (
      who[numeroPrimero] +
      " " +
      action[numeroSegundo] +
      " " +
      what[numeroTercero] +
      " " +
      when[numeroCuarto]
    );
  };

  document.getElementById("excuse").innerHTML = randomNumbers();
};

/*console.log(
who[numeroPrimero] +
  " " +
  action[numeroSegundo] +
  " " +
  what[numeroTercero] +
  " " +
  when[numeroCuarto]
);*/
