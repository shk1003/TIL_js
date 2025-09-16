const userHeight = document.querySelector('#userheight');
const userWeight = document.querySelector('#userweight');
const button = document.querySelector('button');
const ems = document.querySelectorAll('p em'); 
console.log(button, ems[0], userHeight, userWeight)
console.log(typeof(button))

button.addEventListener('click', function() {
    let h = Number(userHeight.value);// 키
    let w = Number(userWeight.value);// 몸무게

    let normal = (h - 100) * 0.9;// 적정체중
    let over = w - normal;// 초과체중 
    
    ems[0].textContent = normal;
    ems[1].textContent = over;
});