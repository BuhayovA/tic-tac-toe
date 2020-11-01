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
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    
    for(let i = 0; i < arr.length; i++) {
        if (boxes[arr[i][0]].innerHTMl == 'X' && boxes[arr[i][1]].innerHTMl == 'X' && boxes[arr[i][2]].innerHTMl == 'X') {
            alert('winner - x')
            location.reload()
        }else if (boxes[arr[i][0]].innerHTMl == 'O' && boxes[arr[i][1]].innerHTMl == 'O' && boxes[arr[i][2]].innerHTMl == 'O') {
            alert('winner - o')
            location.reload()
       }
    }
}

