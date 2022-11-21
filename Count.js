let countt = document.getElementById("count")
let savee = document.getElementById("save")


let count = 0

function increment(){
    count += 1
    countt.innerText = count
}

function decrement(){
    count -= 1 || count 
    countt.innerText = count
}
function save(){
    let countStr = count + " - "
    savee.textContent += countStr
    countt.textContent = 0
    count = 0
}
