let allBoxes = document.querySelectorAll('.box');
let allBoxesValue = [];
let winnerTitle = document.querySelector('.head h2');

let turn = 'x';

allBoxes.forEach(box => {
    box.addEventListener('click',function(e){
        let elem = e.target;
        
        if (elem.innerHTML === ''){
            if(turn === 'x'){
                elem.innerHTML = 'x';
                turn = 'o';
                winnerTitle.innerHTML = 'Turn on<span> o</span>';
            } else if(turn === 'o') {
                elem.innerHTML = 'o';
                turn = 'x';
                winnerTitle.innerHTML = 'Turn on<span> x</span>';
            }
        } else {
            elem.style.cursor = 'not-allowed';
            elem.style.backgroundColor = '#fff';
        };

        winner();

    })
});

function winner(){
    for(var i = 0 ; i < 9 ; i++){
        allBoxesValue[i]  = allBoxes[i].innerHTML;
    }

    if(allBoxesValue[0] == allBoxesValue[1] && allBoxesValue[1] == allBoxesValue[2] && allBoxesValue[0] != ""){
        change(0,1,2);
    } else if(allBoxesValue[3] == allBoxesValue[4] && allBoxesValue[4] == allBoxesValue[5] && allBoxesValue[3] != ""){
        change(3,4,5);
    } else if(allBoxesValue[6] == allBoxesValue[7] && allBoxesValue[7] == allBoxesValue[8] && allBoxesValue[6] != ""){
        change(6,7,8);
    } else if(allBoxesValue[0] == allBoxesValue[4] && allBoxesValue[4] == allBoxesValue[8] && allBoxesValue[0] != ""){
        change(0,4,8);
    } else if(allBoxesValue[2] == allBoxesValue[4] && allBoxesValue[4] == allBoxesValue[6] && allBoxesValue[2] != ""){
        change(2,4,6);
    } else if(allBoxesValue[0] == allBoxesValue[3] && allBoxesValue[3] == allBoxesValue[6] && allBoxesValue[0] != ""){
        change(0,3,6);
    } else if(allBoxesValue[1] == allBoxesValue[4] && allBoxesValue[4] == allBoxesValue[7] && allBoxesValue[1] != ""){
        change(1,4,7);
    } else if(allBoxesValue[2] == allBoxesValue[5] && allBoxesValue[5] == allBoxesValue[8] && allBoxesValue[2] != ""){
        change(2,5,8);
    }
}

function change(number1,number2,number3){
    winnerTitle.innerHTML = `<span>${allBoxesValue[number1]}</span> Win`

    allBoxes[number1].style.backgroundColor = '#222';
    allBoxes[number2].style.backgroundColor = '#222';
    allBoxes[number3].style.backgroundColor = '#222';

    setInterval(function(){winnerTitle.innerHTML += '.'},800);
    setTimeout(function(){location.reload()},1500);
}

