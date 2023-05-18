function preload() {
}

function setup() {
canvas = createCanvas(1200, 680);
canvas.position(110, 250);
video = createCapture(VIDEO);
video.hide();    
}

function draw() {
    image(video,275,120,0,480)
    fill(0,128,0);
    stroke(0,128,0);
    circle(1070,70,50)
}

function take_snapshot() {
    save('student_name.png');
}