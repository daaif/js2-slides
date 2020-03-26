let angle = 0;
const aig = document.querySelector("#horloge line");
const tid = setInterval(function () {
  angle = angle < 360 ? angle + 6 : 0;
  const val = "rotate(" + angle + ")";
  aig.setAttribute("transform", val);
  console.log("tick ", angle);
}, 1000);
function stop() {
  clearInterval(tid)
}
