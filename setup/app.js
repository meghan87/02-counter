const valueEle = document.querySelector("#value");
let value = 0;
const btns = document.querySelectorAll(".btn");

// const decrease = document.querySelector(".decrease");
// const reset = document.querySelector(".reset");
// const increase = document.querySelector(".increase");

btns.forEach((btn)=>{
    btn.addEventListener("click",counterOperations)
})


function counterOperations(){
    const operation = this.classList;
    if(operation.contains("decrease")){
        value--;
    }

    if(operation.contains("reset")){
        value = 0;
    }

    if(operation.contains("increase")){
        value++;
    }

    valueEle.innerText = value;
    valueEle.style.color = changeColor(value);

}


function changeColor(value){
    if (value > 0) return "green";
    if (value < 0) return "red";
    return "hsl(209, 61%, 16%)";
}