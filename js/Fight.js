for(let i = 0; i<=3; i++){
    eSlots[i].slot.addEventListener("click",function(){
        attack(eSlots[i]);
    });
}

function attack(slot){
    if(slot.enemy.HP > 0)
        slot.enemy.HP -=  DMG;
    else
        despawnEnemy(slot)

    enemyAttack(slot);
    console.log("attacked " + slot.enemy.name + " enemy hp: " + slot.enemy.HP)
}

function enemyAttack(slot)
{
    HP -= slot.enemy.DMG;
    console.log(slot.enemy.name + " hit you. Your HP:" + HP)
}