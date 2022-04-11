 // let back = document.getElementById('bannerImg');
// let item = document.querySelectorAll('.hamsa');

// item.addEventListener('mouseover',function(){
//     back.style.filter = 'blur(3px)';
//     back.style.transition = '0.8s';
// });
// item.addEventListener('mouseleave',function(){
//     back.style.filter = 'blur(0px)';
//     back.style.transition = '0.8s';
// });


let back = document.getElementById('bannerImg');
// $('.hamsa').mouseover(function () {
//     back.style.filter = 'blur(3px)';
//     back.style.transition = '0.8s';
// });
// $('.hamsa').mouseleave(function () {
//     back.style.filter = 'blur(0.5px)';
//     back.style.transition = '0.8s';
// });

let imgs = document.getElementsByClassName('hamsa');
Array.from(imgs).forEach(function(element){
    element.addEventListener('mouseover',on_func);
    element.addEventListener('mouseleave',off_func);
})

function on_func() {
        back.style.filter = 'blur(3px)';
        back.style.transition = '0.8s';
    }

function off_func() {
    back.style.filter = 'blur(0.5px)';
    back.style.transition = '0.8s';
}