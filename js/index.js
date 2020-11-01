let area = document.getElementById('area'),
    move = 0;   

area.addEventListener('click', event => {
    if (move % 2 === 0){
   event.target.innerHTML = 'X';
    }else{
        event.target.innerHTML = 'O';
    }
    move++
    check()
})


check = () => {
    let boxes = document.getElementsByClassName('box')
    let arr = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8] 
    ]
}