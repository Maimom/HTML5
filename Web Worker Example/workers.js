// JavaScript source code
var icount = 0;
function progressMeter() {
    icount = icount + 1;
    postMessage(icount);
    setTimeout("progressMeter()", 100);
}
progressMeter();