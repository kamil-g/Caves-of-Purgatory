setInterval(function(){
    statsWindowUpdate();
    eqStatsUpdate();
    updateHero();
    fullFillStats();
},1);



function statsWindowUpdate()
{
    document.querySelector("#LVLstat").innerHTML = "Level: " + lvl;
    document.querySelector("#EXPstat").innerHTML = "Experience: " + exp;
    
    document.querySelector("#HPstat").innerHTML = "Health: (" + HP + "/" + maxHP + ")";
    document.querySelector("#MPstat").innerHTML = "Mana: (" + MP + "/" + maxMP + ")";
    document.querySelector("#EPstat").innerHTML = "Energy: (" + EP + "/" + maxEP + ")";
    
    document.querySelector("#STRstat").innerHTML = "Strength: " + strength;
    document.querySelector("#AGLstat").innerHTML = "Agility: " + agility;
    document.querySelector("#INTstat").innerHTML = "Intellect: " + intellect;

    document.querySelector("#DMGstat").innerHTML = "Attack: " + DMG;
}

