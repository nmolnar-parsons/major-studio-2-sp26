function setup() {
  // TODO: Setup buttons and counter
  const button_1 = document.getElementById("butt-1");
  const button_2 = document.getElementById("butt-2");
  const counter1 = document.getElementById("counter1");
  const counter2 = document.getElementById("counter2");

  const overallCounter = document.getElementById("counter-total");

  button_1.addEventListener("click", (evt) =>{
    counter1.innerHTML = parseInt(counter1.innerHTML) + 1;
    overallCounter.innerHTML = parseInt(overallCounter.innerHTML) + 1;


    console.log("added 1");
  });
  button_2.addEventListener("click", (evt) =>{
    counter2.innerHTML = parseInt(counter2.innerHTML) + 2;
    overallCounter.innerHTML = parseInt(overallCounter.innerHTML) + 2;



    console.log("added 2");
  });

  // expanding this for much larger numbers of buttons and counters gets very difficulty quickly
  // hard to scale. What button goes with what, what counter goes with what...
  // d3 is a way to do this with SVG elements, but not html, per se
  // how do we treat HTML/JS pairings at scale?

}

document.addEventListener("DOMContentLoaded", setup);
// makes sure the DOM is loaded before changes are made to it - basically a safeguard function
