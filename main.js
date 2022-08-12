//const {fabric} = require("./fabric");

var canvas = new fabric.Canvas("myCanvas");
var x = document.getElementById("myAudio");

function newImage() {

   
    fabric.Image.fromURL('BirthdayImage.jpg', function (Img) {
        blockImage = Img;

        blockImage.scaleToWidth(1000);
        blockImage.scaleToHeight(700);
        blockImage.set({
            top: 0,
            left: 0
        });
        canvas.add(blockImage);
    });

}

function PlaySound() {
    x.play();
}
