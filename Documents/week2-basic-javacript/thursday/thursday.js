/// change the content


function changeText(){

    const node =document.getElementById("change-text")
    node.innerHTML = "Comeout baby!"
    // how to change it after 3 second
}
    setTimeout(changeText, 3000)

    let count = 0
    function    increnenOne(){
        const noden = document.getElementById("change-count")
        count = count + 1
        noden.innerHTML = count
    }
 setInterval(increnenOne, 1000);

 //select the element
 // a count varible
 // setinterval
 let clickCount = 0

function incrementOnClick() {
  clickCount++
  document.getElementById("change-click").innerHTML = clickCount;
}

document.getElementById("change-click")
document.addEventListener("click", incrementOnClick);


// change-color

function changeTextandColor() {

    document.getElementById("change-color").innerHTML = "haha";
    document.getElementById("change-color").style.backgroundColor = "blue"
}
setTimeout(changeTextandColor, 3000);