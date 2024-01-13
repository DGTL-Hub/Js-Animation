window.onload = function () {
    // source code here.... 
};

const shapes = [
    "round",
     "square", 
     "rectangle",
     "triangle",
     "romboid"
    ];
    
let objA = {};
objA.aKndOf = "a shape";
let kind = "weird-Evolutionary object.";

// const dx = mouse.x - ball.y, 
//       dy = mouse.y - ball.y,
//       ax = dx * spring;
// let x;

// THE BALL AND SOME PHYSICAL PROPS
// let ball;

// MOVEMENT 
// ball.x = ball.x + 5;
// ball.x += 5;

// while (true) {
//     ball.x = 1;
// }

function drawFrame() {
    // ball.x += 1;
    // ball.draw(context);
}

window.setInterval(drawFrame, 1000 / 60);

// NEW ANIMATION FRAME BUFFER
(function drawFrame() {
    window.requestAnimationFrame(drawFrame);
    // animation code.. 
})();

// OLD ANIMATION FRAME BUFFER
if (!window.requestAnimationFrame) {
    window.requestAnimationFrame = (
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function (callback) {
            return window.setTimeout(callback, 1000 / 60);
        });
}

function kindObject(shapeIs) {
    this.aKndOf = shapeIs;
    this.scribe = function () {
        console.log("It's a " + this.aKndOf + " shape.");
    };  
}

let objAround = new kindObject("round");
let objAsquare = new kindObject("square");
objAround.scribe();
objAsquare.scribe();

// KindObject.prototype.kindOfObject = function () {
//     console.log("this is a " + this.aKndOf);
// };

let objBInstance = new KindObject("square");
objBInstance.kindOfObject();

for (let i = 0, len = shapes.length; i < len; i++) {
    console.log(shapes[i]);
}

arr.forEach(function(element, i) {
    console.log(element);
});
