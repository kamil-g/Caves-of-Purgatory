let inDungeon = false;

document.querySelector("#startGame").addEventListener("click", function(){
    startGame();
});

function startGame()
{
    generateDoor();
    displayDoor(doorQty);
}

//generate number of door in cave
let doorQty = 0;

function generateDoor()
{
    let x = Math.random() * 30;
    if(x >= 20)
        doorQty = 3;
    else if(x >= 10 && x < 20)
        doorQty = 2;
    else if(x < 10)
        doorQty = 1;
}

//display qty of ways
function displayDoor(x)
{
    document.querySelector(".topPanel").style.display = "none";
    document.querySelector("#dungStart").style.display = "none";
    document.querySelector("#cave" + x).style.display = "block";
}

//the html buttons of door
document.querySelector("#goForward1").addEventListener("click", function(){
    startFight("f1");
});
document.querySelector("#goLeft2").addEventListener("click", function(){
    startFight("l2");
});
document.querySelector("#goRight2").addEventListener("click", function(){
    startFight("r2");
});
document.querySelector("#goForward3").addEventListener("click", function(){
    startFight("f3");
});
document.querySelector("#goLeft3").addEventListener("click", function(){
    startFight("l3");
});
document.querySelector("#goRight3").addEventListener("click", function(){
    startFight("r3");
});

//fight starting
function startFight(x)
{   
    document.querySelector("#cave1").style.display = "none";
    document.querySelector("#cave2").style.display = "none";
    document.querySelector("#cave3").style.display = "none";
    document.querySelector("#fightCave").style.display = "grid";
    
    inDungeon = true;
    setEnemyQty();
    console.log("went " + x);
}

//setting quantity of enemies
function setEnemyQty()
{
    let enemyQty = Math.random() * 4;; 

    if (enemyQty < 1)
        enemyQty = 0;
    else if (enemyQty >= 1 && enemyQty < 2)
        enemyQty = 1;
    else if (enemyQty >= 2 && enemyQty < 3)
        enemyQty = 2;
    else
        enemyQty = 3;
    
    console.log("enemyQTY: " + enemyQty);
}

//enemy slots when fighting
let eFields = [
    document.querySelector("#area0"),
    document.querySelector("#area1"),
    document.querySelector("#area2"),
    document.querySelector("#area3")
];

function enemySlot(slot, enemy){
    this.slot = slot;
    this.enemy = enemy;
};

let eSlots = [];
for(let i = 0; i <= 3; i++){
    eSlots.push(new enemySlot(eFields[i], null));
} 

//test interval
setInterval(function(){
    eSlots[0].enemy = rat;
    eSlots[0].slot.innerHTML = eSlots[0].enemy.name;
},1);





















