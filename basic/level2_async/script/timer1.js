// timer1.js
// setInterval(콜백함수, 시간)
/* let num1 = 1;
const timer1 = setInterval(function(){
    if(num1 > 5) num1 = 1
    console.log('timer test' +num1)
    num1++
}, 500) */

// 0 ~ 6 반복타이머
// 123456 0123456 0123456
/* let num1 = 0;
const timer1 = setInterval(function(){
    num1++
    if(num1 > 6) num1 = 0
    console.log(num1)
}, 500) */

// 3 ~ 0 반복타이머
/* let num = 3;
let timer = setInterval(function(){
    console.log(num)
    num--
    if(num<0) num = 3
}, 500) */
// 3210 3210 3210

// 이미지 슬라이드 타이머 활용
const gentleSlide = document.querySelectorAll('.gentle_slide_container1 .slide')
const gentleSlideCurrentNum = document.querySelector('.page_number .current')
const gentleSlideTotalnum = document.querySelector('.page_number .total')
let gentleNum = 0; //초기값
console.log(gentleSlide,gentleSlideCurrentNum,gentleSlideTotalnum)

//슬라이드 총 번호표시
gentleSlideTotalnum.textContent = gentleSlide.length;
gentleSlideCurrentNum.textContent = gentleNum +1;


//012345 현재 존재하는 슬라이드 인덱스
//12345 012345 012345 ...(반복) : 진행해야하는 인덱스 순서
/* let gentleNum = 0; //초기값
let gentleTimer = setInterval(function(){
    gentleNum++
    if(gentleNum >= gentleSlide.length) gentleNum = 0
    //console.log(gentleNum)
    for(let i of gentleSlide) i.style.display = 'none'
    gentleSlide[gentleNum].style.display = 'block'
},500) */

// gentleSlide 모든 슬라이드에 속성 변경 시 애니메이션 기능 적용 transition
for(let i of gentleSlide) i.style.transition = 'opacity 0.5s' 

let gentleTimer = setInterval(function(){
    gentleNum++
    if(gentleNum >= gentleSlide.length) gentleNum = 0
    //console.log(gentleNum)
    for(let i of gentleSlide) {
        i.style.visibility = 'hidden'
        i.style.opacity = '0'
    }
    gentleSlide[gentleNum].style.visibility = 'visible'
    gentleSlide[gentleNum].style.opacity = '1'
    gentleSlideCurrentNum.textContent = gentleNum +1;
},3000)

// opacity + visiblity 서서히 나타나는 슬라이드 애니메이션


//이미지 슬라이드(역순)
const gentleSlide2 = document.querySelectorAll('.gentle_slide_container2 .slide')
let gentleNum2 = gentleSlide2.length -1//초기값
//012345 현재 존재하는 슬라이드 인덱스
//43210 543210 543210 ...(반복) : 진행해야하는 인덱스 순서
//console.log(gentleNum2)
const gentleTimer2 = setInterval(function(){
    gentleNum2--
    if(gentleNum2 < 0) gentleNum2 = gentleSlide2.length -1
    //console.log(gentleNum2)
    for(let i of gentleSlide2) i.style.display = 'none'
    gentleSlide2[gentleNum2].style.display = 'block'
},500)