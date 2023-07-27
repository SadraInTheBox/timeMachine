let x, y, now, timeSpeed;
let ox, oy;
now = 0;
timeSpeed = 0.01

function setup() {
    createCanvas(400, 400);
    background(100)
    gozashteBtn = createButton("برگشت به گذشته...");
    gozashteBtn.mousePressed(()=>{
        timeSpeed = -0.01;
        stroke(100)
    })
    ayandeBtn = createButton("برو به آینده");
    ayandeBtn.mousePressed(()=>{
        timeSpeed = 0.01;
        stroke(0)
    })
}

function draw(){
    ox = x;
    oy = y;
    x = noise(now)*width;
    y = noise(now+100)*height;
    //circle(x, y, 30);
    now += timeSpeed;
    line(ox, oy, x, y)
}