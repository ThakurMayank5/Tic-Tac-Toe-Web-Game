var turn='X';
var board=[-1,-1,-1,-1,-1,-1,-1,-1,-1];

var win_combinations=[[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];

var status_win=false;
var count=0;

//0-->0     1-->X

function tap(a) {
    
    var performed=false;
    switch(a)
    {
        case 1:
                if(document.getElementById("block1").textContent=="" && !status_win)
                {
                    document.getElementById("block1").textContent=turn;
                    performed=true;
                }
            break;
            case 2:
                if(document.getElementById("block2").textContent=="" && !status_win)
                {
                    document.getElementById("block2").textContent=turn;
                    performed=true;
                }
            break;
            case 3:
                if(document.getElementById("block3").textContent=="" && !status_win)
                {
                    document.getElementById("block3").textContent=turn;
                    performed=true;
                }
            break;
            case 4:
                if(document.getElementById("block4").textContent=="" && !status_win)
                {
                    document.getElementById("block4").textContent=turn;
                    performed=true;
                }
            break;
            case 5:
                if(document.getElementById("block5").textContent=="" && !status_win)
                {
                    document.getElementById("block5").textContent=turn;
                    performed=true;
                }
            break;
            case 6:
                if(document.getElementById("block6").textContent=="" && !status_win)
                {
                    document.getElementById("block6").textContent=turn;
                    performed=true;
                }
            break;
            case 7:
                if(document.getElementById("block7").textContent=="" && !status_win)
                {
                    document.getElementById("block7").textContent=turn;
                    performed=true;
                }
            break;
            case 8:
                if(document.getElementById("block8").textContent=="" && !status_win)
                {
                    document.getElementById("block8").textContent=turn;
                    performed=true;
                }
            break;
            case 9:
                if(document.getElementById("block9").textContent=="" && !status_win)
                {
                    document.getElementById("block9").textContent=turn;
                    performed=true;
                }
            break;
    }
    if(performed)
    {
        if(turn=="X")
        {
            board[a-1]=1;
            document.getElementById("status").textContent="It's 0's Turn";
            turn=0;
        }
        else{
            board[a-1]=0;
            turn="X";
            document.getElementById("status").textContent="It's X's Turn";
        }   
        count++;
        check_win();
    }
}

function reset(){
    for(var i=0; i<9; i++)
    {
        board[i]=-1;
    }
    count=0;
    document.getElementById("status").textContent="It's X's Turn";
    status_win=false;
    document.getElementById("block1").textContent="";
    document.getElementById("block2").textContent="";
    document.getElementById("block3").textContent="";
    document.getElementById("block4").textContent="";
    document.getElementById("block5").textContent="";
    document.getElementById("block6").textContent="";
    document.getElementById("block7").textContent="";
    document.getElementById("block8").textContent="";
    document.getElementById("block9").textContent="";
}
function check_win(){
    for(var i=0; i<8; i++)
    {
        if((board[win_combinations[i][0]-1] == board[win_combinations[i][1]-1] )&& board[win_combinations[i][0]-1] == board[win_combinations[i][2]-1])
        {
            if(board[win_combinations[i][0]-1]!=-1)
            {
                win();
                break;
            }
        }
    }
    if(count==9)
    {
        document.getElementById("status").textContent="It is a Draw!";
    }
}

function win()
{
    status_win=true;
    if(turn=="X")
    {
        turn=0;
    }
    else{
        turn="X";
    }
    document.getElementById("status").textContent=`${turn} Wins!`;
}