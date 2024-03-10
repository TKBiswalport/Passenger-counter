
let saveEl = document.getElementById("save-el")
let CountEl= document.getElementById("count-el")
let count=0

function increment(){
    count=count+1
    CountEl.textContent=count
}

function save(){
    // let countSTR = count + " - "
    // saveEl.textContent += countSTR
    // console.log(count)
    let countStr = count + " - "
    saveEl.textContent += countStr
    CountEl.textContent = 0
    count = 0
}

// function reset()
// {
//     count = 0;
//     CountEl.textContent = count
    
// }