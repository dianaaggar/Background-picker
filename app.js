document.getElementById('blue').onclick = displayBlue
document.getElementById('gold').onclick = displayGold
document.getElementById('red').onclick = displayRed
document.getElementById('green').onclick = displayGreen

function displayBlue() {
    document.querySelector('body').style.backgroundColor = 'blue'
    document.querySelector('body').style.color ='white'
}

function displayGold(){
    document.querySelector('body').style.backgroundColor = 'gold'
    document.querySelector('body').style.color = 'white'
}
function displayRed(){
    document.querySelector('body').style.backgroundColor = 'red'
    document.querySelector('body').style.color = 'white'
}
function displayGreen(){
    document.querySelector('body').style.backgroundColor = 'green'
    document.querySelector('body').style.color = 'yellow'
}