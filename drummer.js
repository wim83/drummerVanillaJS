// window.onload = init;

// function init(){
// window.on('keypress',function(event){
//     console.log(event);
// })
// }

document.addEventListener('keydown', function (e) {
    console.log(e);
    var number = e.keyCode;
    console.log(number);
    var audio = document.querySelector('audio[data-key="' + number + '"]');
    var div = document.querySelector('div[data-key="' + number + '"]');
    console.log(audio);
    audio.play();
    console.log(div);

})