
difference=0;
rightWristX=0;
leftWristX=0;
function setup(){
    video=createCapture(VIDEO);
    video.size=(500, 500);
video.position(0,160)
    canvas=createCanvas(550, 500);
    canvas.position(650, 160);
    poseNet=ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}
function draw(){
   
    background('#064b63');
document.getElementById("font_reader").innerHTML=" Font size of the text will be = "+difference+"px";
textSize(difference);
fill('#91cfe6');
text('Daiwik',50,400);
}
function modelLoaded(){
console.log("PoseNet is Initialized")
}
function gotPoses(results){
    if(results.length>0)
    {
        console.log(results)

        leftWristX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x;
        difference=floor(rightWristX-leftWristX);
difference=Math.abs(difference);
        console.log("leftWristX= "+leftWristX+"rightWristX= "+rightWristX+"difference= "+difference);
    }
}