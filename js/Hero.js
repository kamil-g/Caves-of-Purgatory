let heroName = "none";
let heroClass = "none";
let lvl = 1;
let exp = 0;

let maxHP = 100;
let maxMP = 100;
let maxEP = 101;
let strength = 10;
let agility = 10;
let intellect = 10;

let HP = 100;
let MP = 100;
let EP = 100;

let baseHP = 100;
let baseMP = 100;
let baseEP = 100;
let baseSTR = 10;
let baseAGL = 10;
let baseINT = 10;

let DMG = 10;

function updateHero()
{
    maxHP = Math.round( baseHP + bonusStats[0]);
    maxMP = Math.round(baseMP + bonusStats[1]);
    maxEP = Math.round(baseEP + bonusStats[2]);
    strength = Math.round(baseSTR + bonusStats[3]);
    agility = Math.round(baseAGL + bonusStats[4]);
    intellect = Math.round(baseINT + bonusStats[5]);
    DMG = Math.round(strength/2 + agility/3 + bonusStats[7]);
};
