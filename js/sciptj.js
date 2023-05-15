'use strick'

const btn = document.querySelector('#plus');
const btn2 = document.querySelector('#minus');
const out = document.querySelector('#out');
const div = document.querySelector('#div');
let err = '';
let i = 0;
out.innerText = i;
btn.addEventListener('click',()=> {
    i++
    out.innerHTML=i
    err=''
    div.innerText=err;
});

btn2.addEventListener("click",() => {
    if(i>0){
    i--;
    err=""
}
out.innerText=i;
div.innerText=err;
})
