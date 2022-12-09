const score = document.querySelector(".score");
question = document.querySelector(".question"),
input = document.querySelector(".input"),
btn = document.querySelector(".btn");

let num1 = Math.ceil(Math.random(0)* 10);
let num2 = Math.ceil(Math.random(0)* 10);

let check = num1 * num2;
question.innerHTML = ` What is ${num1} multiply by ${num2} = ?`

let counter = JSON.parse(localStorage.getItem("score"));

if(!counter){
    counter = 0;
}

score.innerHTML= `Score: ${counter}`

const getCheck = (()=>{  
    let inputValue = input.value;
    let valueCon = +inputValue;
    if(valueCon == ""){
        window.alert("please enter some number")
    }else{
        if(check === valueCon){
        counter++
        updateLocalStorage()
        
    }else{
        counter--
        updateLocalStorage()
        if(counter < 0){
            localStorage.clear()
        }
        
    }
    }
})

btn.addEventListener(("click"), () => {
    
        getCheck()
        
})
function updateLocalStorage(){
    localStorage.setItem("score", JSON.stringify(counter))
}



