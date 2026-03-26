let arr = [["","",""],["","",""],["","",""]];
let track = "X";

function move(row, col, btn){
    if(arr[row][col] === ""){
        arr[row][col] = track ;
       btn.innerText = track;
    

    if(checkWin()){
         document.getElementById("msg").innerText = track + " Wins!";
         setTimeout(resetGame, 2000);
        return;
    }

    if(checkDraw()){
        document.getElementById("msg").innerText = "Match Draw!";
        setTimeout(resetGame, 2000);
        return;
    }
    track = (track === "X") ? "O" : "X";
    }
else{
    console.log("Invalid Move");

    }
}

function checkWin(){
    // row ;
    for(let i=0; i<3; i++){
        if(arr[i][0] !== "" && arr[i][0] === arr[i][1] && arr[i][1] === arr[i][2]){
            return true;
        }
    }
    // coloumn
    for(let i=0; i<3; i++){
        if(arr[0][i] !== "" && arr[0][i] === arr[1][i] && arr[1][i] === arr[2][i]){
            return true;
        }
    }

    //digonal 
  
        if(arr[0][0] !== "" && arr[0][0] === arr[1][1] && arr[1][1] === arr[2][2]){
            return true;
        }

    // next 
    if(arr[0][2] !== "" && arr[0][2] === arr[1][1] && arr[1][1] === arr[2][0]){
        return true;
    }
    return false;
    }
    function checkDraw(){
        for(let i=0; i<3; i++){
            for(let j=0; j<3; j++){
                if(arr[i][j] === ""){
                    return false;
                }
            }
        }
        return true
    }
    function resetGame(){
    arr = [["","",""],["","",""],["","",""]];
    track = "X";

    document.getElementById("msg").innerText = "";

    let buttons = document.querySelectorAll(".board button");
    buttons.forEach(btn => btn.innerText = "");
}



