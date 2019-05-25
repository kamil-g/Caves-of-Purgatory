for(let i = 0; i<=3; i++){
    eSlots[i].slot.addEventListener("click",function(){
        attack(eSlots[i]);
    });
}

function attack(slot){
    slot.enemy.HP -=  strength;
    enemyAttack(slot);
    console.log("attacked " + slot.enemy.name + " enemy hp: " + slot.enemy.HP)
}

function enemyAttack(slot)
{
    HP -= 10;
    console.log(slot.enemy.name + " hit you. Your HP:" + HP)
}