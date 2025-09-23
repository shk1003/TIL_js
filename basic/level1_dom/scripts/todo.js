//todo.js
//1. input 할일 입력 후 '추가하기' 버튼 클릭하면 ul의 마지막 자식 위치 li 할일 추가하기
const listInput = document.querySelector('#list')
const listAddBtn = document.querySelector('#list_add')
const listWrapUI = document.querySelector('#list_wrap')
console.log(listInput,listAddBtn,listWrapUI)

listAddBtn.addEventListener('click',()=>{
    //입력안하면 '할일을 입력하세요' 메세지 출력(삼항조건)
    listInput.value == '' ? alert('할일을 입력하세요') : toDoFunc();
})

listInput.addEventListener('keyup',(e)=>{
    if(e.key === 'Enter'){listInput.value == '' ? alert('할일을 입력해주세요') : toDoFunc();}
})

function toDoFunc(){
    console.log(listInput.value) //값 확인
    console.log(listWrapUI) //대입할 대상 확인
    listWrapUI.innerHTML +=  `<li><span>${listInput.value}</span><button type="button" class="close">X</button></li>`
    listInput.value = '';
    const toDoClose = document.querySelectorAll('li .close')
    console.log(toDoClose)
    //부모잡는속성 parentNode
    //삭제내장함수 remove()
    for(let i of toDoClose){
        i.addEventListener('click',()=>{
            i.parentNode.remove();
        })
    }
    return console.log('할일출력 테스트')
}

