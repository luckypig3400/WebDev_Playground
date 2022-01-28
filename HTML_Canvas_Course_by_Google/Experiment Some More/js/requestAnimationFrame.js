// example code from mr doob : http://mrdoob.com/lab/javascript/requestanimationframe/
var canvas, context;
init();
animate();
function init() {
    canvas = getCanvas();
    context = canvas.getContext('2d');
}
function animate() {
    requestAnimationFrame(animate);
    draw();
}
function draw() {
    var time = new Date().getTime() * 0.002;
    var x = 69 + Math.sin(time) * 96 + 38;
    var y = 69 + Math.cos(time * 0.9) * 96 + 38;

    context.fillStyle = 'rgb(245,245,245)';
    context.fillRect(0, 0, 600, 600);
    context.fillStyle = 'rgb(25,60,90)';
    context.beginPath();
    context.arc(x, y, 10, 0, Math.PI * 2, true);
    context.closePath();
    context.fill();
}