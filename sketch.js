var ball;
var position, database;
var gameState=0;
var playerCount;
var form,player,game;
var allPlayers;

var car1,car2,car3,car4,cars;
var car1_img, car2_img, car3_img, car4_img, track;

function preload(){

    track=loadImage("images/track.jpg");
    car1_img=loadImage("images/car1.png");
    car2_img=loadImage("images/car2.png");
    car3_img=loadImage("images/car3.png");
    car4_img=loadImage("images/car4.png");
}

function setup(){
    createCanvas(displayWidth,displayHeight);

    database=firebase.database();
    console.log(database);

    game=new Game();
    game.getState();
    game.start();
    
    form=new Form();
    form.display();
}




function draw(){
    background("white");
    if(playerCount===4){
        game.update(1);
    }

    if(gameState===1){

        clear();
        game.play();
    }

    if(gameState===2){

        game.end();
    }
}






   




