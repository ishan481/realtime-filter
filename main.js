 noseX=0;
 noseY=0;



function preload(){
 var clown_nose=loadImage('https://i.postimg.cc/MHhJH728/Clown-Nose-Download-PNG-Image.png');

}

function setup(){
    canvas= createCanvas (300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses);



}

function gotPoses(results){
         if( results.length > 0){
            console.log(results);
            noseX=results[0].pose.nose.x;
            noseY=results[0].pose.nose.y;
            console.log("nose x=" + nose.x);
            console.log("nose y=" + nose.y);

         }
}

function modelLoaded(){
    console.log('poseNet is initialised');
}

function draw(){

    image(video,0,0,300,300);
    circle( noseX,noseY,20);
    fill(255,0,0);
    stroke(255,0,0);
    image(clown_nose,noseX,noseY,30,30);


}

function Take_snapshot(){
    save('image.png');
}