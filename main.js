function preload(){

}

function setup(){
canvas=createCanvas(300,300);
canvas.center();
webcam=createCapture(VIDEO);
webcam.hide();

poseNet=ml5.poseNet(webcam,modelLoaded);
poseNet.on('pose',gotPoses);

}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        console.log("nose_x="+results[0].pose.nose.x);
        console.log("nose_y="+results[0].pose.nose.y);
    }
}



function modelLoaded(){
console.log("pose net has been initialized");
}

function draw(){
image(webcam,0,0,300,300)
}

function take_snapshot(){
    save("filter_image");
}