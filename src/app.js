/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = [
  "The dog",
  "My grandma",
  "The mailman",
  "My bird",
  "A raccoon",
  "My neighbor",
  "A random stranger",
  "The cat",
  "My brother",
  "A ghost",
  "My teacher",
  "A wizard",
  "My best friend",
  "An alien",
  "My cousin",
  "The police officer"
];

let action = [
  "ate",
  "peed on",
  "crushed",
  "broke",
  "threw away",
  "burned",
  "hid",
  "lost",
  "destroyed",
  "borrowed",
  "took",
  "stole",
  "dropped",
  "painted",
  "shredded",
  "flushed",
  "ran over"
];

let what = [
  "my homework",
  "my phone",
  "the car",
  "my backpack",
  "my lunch",
  "my book",
  "my laptop",
  "my shoes",
  "my bike",
  "my report",
  "the keys",
  "my charger",
  "my game console",
  "my glasses",
  "my project",
  "my notes",
  "my wallet",
  "the TV remote"
];

let when = [
  "before the class",
  "when I was sleeping",
  "while I was exercising",
  "during my lunch",
  "while I was praying",
  "right before the meeting",
  "while I was at the store",
  "when I was showering",
  "while I was cooking",
  "when I was driving",
  "in the middle of the night",
  "while I was texting",
  "during the storm",
  "when I was on the phone",
  "while I was playing video games",
  "when I was walking the dog"
];

function generateExcuse() {
  let randomWho = who[Math.floor(Math.random() * who.length)];
  let randomAction = action[Math.floor(Math.random() * action.length)];
  let randomWhat = what[Math.floor(Math.random() * what.length)];
  let randomWhen = when[Math.floor(Math.random() * when.length)];

  let excuse =
    randomWho + " " + randomAction + " " + randomWhat + " " + randomWhen;
  return excuse;
}

window.onload = function() {
  document.getElementById("excuse").innerHTML = generateExcuse();
};
