const form = document.getElementById('formV')
const btnrst = document.getElementById('rst')
const inputA = document.getElementById('A')
const inputB = document.getElementById('B')

let C = document.querySelector(".aprov");
let D = document.querySelector(".equal");
let F = document.querySelector(".reprov");
form.addEventListener('submit', function(e){
    e.preventDefault();
    let A = document.getElementById("A").value
    let B = document.getElementById("B").value
    if(B > A){
        C.style.display = 'block'
    } 
    else if(B === A){
            D.style.display = 'block'
    }
    else{
        F.style.display = 'block'
    }
})
inputA.addEventListener('keyup',function(l){
    A = ''
    B = ''
        C.style.display = 'none'
        D.style.display = 'none'
        F.style.display = 'none'
})
inputB.addEventListener('keyup',function(l){
    A = ''
    B = ''
        C.style.display = 'none'
        D.style.display = 'none'
        F.style.display = 'none'
})