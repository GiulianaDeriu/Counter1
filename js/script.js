let counterDisplayElem = document.querySelector('.counter-display');
let counterMinusElem = document.querySelector('.counter-minus');
let counterPlusElem = document.querySelector('.counter-plus');
let counterResetElem = document.querySelector('.counter-reset');

let count = 0;

updateDisplay();

counterPlusElem.addEventListener("click",()=>{
    count++;
    updateDisplay();
}) ;

counterMinusElem.addEventListener("click",()=>{
    count--;
    updateDisplay();
});

counterResetElem.addEventListener("click",()=>{
    count=0;
    updateDisplay();
})

function updateDisplay(){
    counterDisplayElem.innerHTML = count;
};
