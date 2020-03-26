let angle = 0;
const aig = document.querySelector("#horloge line");
const tid = setInterval(function () {
  angle = angle < 360 ? angle + 6 : 0;
  const val = "rotate(" + angle + ")";
  aig.setAttribute("transform", val);
  /* console.log("tick ", angle); */
}, 1000);


function callMe() {
  while (true) {

  }
}
function ping() {
  pong()
}
function pong() {
  ping()
}

// Avec blocage
function block(sec) {
  const startTime = Date.now()
  let now = startTime, delta
  let counter = 0
  while (true) {
    now = Date.now()
    delta = now - startTime
    counter++
    doTask(counter)
    if (delta > 1000 * sec) {
      console.log(
        "fin du bloquage, ouf!!!!",
        "Nombre de boucles :",
        counter
      );
      return;
    }
  }
}
function doTask(count) {
  console.log('doing task ' + count + ' iteration')
}
// Sans blockage  
function block2(sec) {
  const startTime = Date.now()
  let now = startTime, delta = 0
  let counter = 0
  function task() {
    now = Date.now()
    delta = now - startTime
    counter++
    doTask(counter)
    if (delta < 1000 * sec)
      setTimeout(task, 0)
    else
      console.log(`fin du bloquage, ouf!!!!
Nombre de boucles : ${counter}`)
  }
  task()
}
