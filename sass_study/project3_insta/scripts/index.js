const iconMenu = document.querySelectorAll('.top .icon a')
console.log(iconMenu)

iconMenu[0].addEventListener('click',function(e){
    e.preventDefault()
    iconChange(this, 'like')
})
iconMenu[1].addEventListener('click',function(){iconChange(this, 'comment')})
iconMenu[2].addEventListener('click',function(){iconChange(this, 'paper')})
function iconChange(target, name){
    return target.children[0].src= `./images/${name}_on.png`
}

/* iconMenu[0].addEventListener('click',iconChange(0, 'like'))
iconMenu[1].addEventListener('click',iconChange(1, 'comment'))
iconMenu[2].addEventListener('click',iconChange(2, 'paper'))
function iconChange(index, name){
    return function (e){
        e.preventDefault()
        iconMenu[index].children[0].src= `./images/${name}_on.png`
    }
} */
/* iconMenu[0].addEventListener('click',function(e){
    e.preventDefault()
    console.log(this)
    this.children[0].src = './images/like_on.png'
})
iconMenu[1].addEventListener('click',(e)=>{
    e.preventDefault()
    iconMenu[1].children[0].src = './images/comment_on.png'
}) */

//사진 클릭 시 스피커 모양 보이기(+애니메이션)
const instaPhoto = document.querySelector('#insta .photobg');
const volumnIcon = document.querySelector('#popup');
console.log(instaPhoto, volumnIcon)

volumnIcon.style.transition = 'opacity 1s'

instaPhoto.addEventListener('dblclick',()=>{
    volumnIcon.style.opacity = 1;
})
instaPhoto.addEventListener('mouseout',()=>{
    volumnIcon.style.opacity = 0;
})