const btn = document.querySelector('.btn');
const body = document.querySelector('body');
const audio = document.querySelector('#audio');

btn.onclick = function(){
    body.classList.toggle('on');
    audio.play();
}