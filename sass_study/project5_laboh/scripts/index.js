//index.js
const small = document.querySelectorAll('.small_view a')
const big = document.querySelector('.big')
//두번째 small 클릭 시 두번째 big 애니메이션 옆으로 나타나기

big.style.transition = 'transform 0.3s'

small[1].addEventListener('click',()=>{
    big.style.transform = `translateX(-${big.children[0].offsetWidth*1}px)`
})

const plusBtn = document.querySelector('#plus_btn')
const minusBtn = document.querySelector('#minus_btn')
const orderNum = document.querySelector('#order_num')
console.log(plusBtn,minusBtn,orderNum)
let num = 1;

orderNum.value = num;
