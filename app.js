const gameBoard = document.querySelector('.game_board') // gharar dadane div asli dar variable gameboard
const gameBlocks = []

let i = 0 // shomarande baraye zakhire game block ha dar variable baraye estefade dar js
let j =1
let turn = 'o'
let play = true

//ba estefade az in halghe tamame game block hara dakhel araye gameBlocks zakhire mikonim
while (i < 9) {
    gameBlocks[i] = document.getElementById('game_block' + j)
    i++
    j++
}

//for loop baraye taghire rang paszamine block ha hengame mouse hover
for (let i = 0; i<9 ; i++){
    gameBlocks[i].addEventListener('mouseenter', function(){
        gameBlocks[i].style.backgroundColor = 'gray';
    })
    gameBlocks[i].addEventListener('mouseleave', function(){
        gameBlocks[i].style.backgroundColor='aqua'
    })
}



gameBlocks[0].addEventListener('click', function(){
    gameBlocks[0].textContent = turn
    gameBlocks[0].style.fontSize = '100px'
    winCondition(turn)
    turnChooser()
})
gameBlocks[1].addEventListener('click', function(){
    gameBlocks[1].textContent = turn
    gameBlocks[1].style.fontSize = '100px'
    winCondition(turn)
    turnChooser()
})
gameBlocks[2].addEventListener('click', function(){
    gameBlocks[2].textContent = turn
    gameBlocks[2].style.fontSize = '100px'
    winCondition(turn)
    turnChooser()
})
gameBlocks[3].addEventListener('click', function(){
    gameBlocks[3].textContent = turn
    gameBlocks[3].style.fontSize = '100px'
    winCondition(turn)
    turnChooser()
})
gameBlocks[4].addEventListener('click', function(){
    gameBlocks[4].textContent = turn
    gameBlocks[4].style.fontSize = '100px'
    winCondition(turn)
    turnChooser()
})
gameBlocks[5].addEventListener('click', function(){
    gameBlocks[5].textContent = turn
    gameBlocks[5].style.fontSize = '100px'
    winCondition(turn)
    turnChooser()
})
gameBlocks[6].addEventListener('click', function(){
    gameBlocks[6].textContent = turn
    gameBlocks[6].style.fontSize = '100px'
    winCondition(turn)
    turnChooser()
})
gameBlocks[7].addEventListener('click', function(){
    gameBlocks[7].textContent = turn
    gameBlocks[7].style.fontSize = '100px'
    winCondition(turn)
    turnChooser()
})
gameBlocks[8].addEventListener('click', function(){
    gameBlocks[8].textContent = turn
    gameBlocks[8].style.fontSize = '100px'
    winCondition(turn)
    turnChooser()
})



// function baraye taeen nobat
function turnChooser(){
    if (turn == 'o'){
        turn = 'x'
    }
    else turn = 'o'
}

// function baraye check kardan bordan x ya o
function winCondition(turn){
    if((gameBlocks[0].textContent == gameBlocks[1].textContent && gameBlocks[1].textContent == gameBlocks[2].textContent) ||
        (gameBlocks[3].textContent == gameBlocks[4].textContent && gameBlocks[4].textContent == gameBlocks[5].textContent) ||
        (gameBlocks[6].textContent == gameBlocks[7].textContent && gameBlocks[7].textContent == gameBlocks[8].textContent) ||
        (gameBlocks[0].textContent == gameBlocks[3].textContent && gameBlocks[3].textContent == gameBlocks[6].textContent) ||
        (gameBlocks[1].textContent == gameBlocks[4].textContent && gameBlocks[4].textContent == gameBlocks[7].textContent) ||
        (gameBlocks[2].textContent == gameBlocks[5].textContent && gameBlocks[5].textContent == gameBlocks[8].textContent) ||
        (gameBlocks[0].textContent == gameBlocks[4].textContent && gameBlocks[4].textContent == gameBlocks[8].textContent)||
        (gameBlocks[2].textContent == gameBlocks[4].textContent && gameBlocks[4].textContent == gameBlocks[6].textContent)){
            alert(turn + 'Win!!!')
            location.reload() //reload kardan webpage baad az elam barande
        }  
}