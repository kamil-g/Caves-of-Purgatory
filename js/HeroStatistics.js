//do refaktoryzacji !!! wszystko 

let bonusHP = 0,
    bonusMP = 0,
    bonusEP = 0,
    bonusSTR = 0,
    bonusAGL = 0,
    bonusINT = 0,
    bonusDEF = 0,
    bonusDMG = 0;



let bonusStats = [bonusHP, bonusMP, bonusEP, bonusSTR, bonusAGL, bonusINT, bonusDEF, bonusDMG];

function eqSlotStats(bonusHP, bonusMP, bonusEP, bonusSTR, bonusAGL, bonusINT, bonusDEF, bonusDMG)
{
    this.bonusDMG = bonusDMG;
    this.bonusDEF = bonusDEF;
    this.bonusHP = bonusHP;
    this.bonusMP = bonusMP;
    this.bonusEP = bonusEP;
    this.bonusSTR = bonusSTR;
    this.bonusAGL = bonusAGL;
    this.bonusINT = bonusINT;
}

let headStats = new eqSlotStats(0,0,0,0,0,0,0,0);
let bodyStats = new eqSlotStats(0,0,0,0,0,0,0,0);
let mainHandStats = new eqSlotStats(0,0,0,0,0,0,0,0);
let offHandStats = new eqSlotStats(0,0,0,0,0,0,0,0);
let legsStats = new eqSlotStats(0,0,0,0,0,0,0,0);
let bootsStats = new eqSlotStats(0,0,0,0,0,0,0,0);
let ring1Stats = new eqSlotStats(0,0,0,0,0,0,0,0);
let ring2Stats = new eqSlotStats(0,0,0,0,0,0,0,0);
let amuletStats = new eqSlotStats(0,0,0,0,0,0,0,0);

let slotStats = [headStats, bodyStats, legsStats, bootsStats,  ring1Stats, ring2Stats, amuletStats, mainHandStats, offHandStats];

function eqStatsUpdate()
{
    for (let i = 0; i <= 8; i++)
    {
        if (eqSlots[i].item != null)
        {
            slotStats[i].bonusHP = eqSlots[i].item.bonusHP;
            slotStats[i].bonusMP = eqSlots[i].item.bonusMP;
            slotStats[i].bonusEP = eqSlots[i].item.bonusEP;
            slotStats[i].bonusSTR = eqSlots[i].item.bonusSTR;
            slotStats[i].bonusAGL = eqSlots[i].item.bonusAGL;
            slotStats[i].bonusINT = eqSlots[i].item.bonusINT;
            slotStats[i].bonusDMG = eqSlots[i].item.bonusDMG;
            slotStats[i].bonusDEF = eqSlots[i].item.bonusDEF;
        }
        else if(eqSlots[i].item == null)
        {
            slotStats[i].bonusHP = 0;
            slotStats[i].bonusMP = 0;
            slotStats[i].bonusEP = 0;
            slotStats[i].bonusSTR = 0;
            slotStats[i].bonusAGL = 0;
            slotStats[i].bonusINT = 0;
            slotStats[i].bonusDMG = 0;
            slotStats[i].bonusDEF = 0;
        }
        
        bonusStats[0] = bodyStats.bonusHP + headStats.bonusHP + legsStats.bonusHP + bootsStats.bonusHP + mainHandStats.bonusHP + offHandStats.bonusHP + ring1Stats.bonusHP + ring2Stats.bonusHP + amuletStats.bonusHP;
        
        bonusStats[1] = bodyStats.bonusMP + headStats.bonusMP + legsStats.bonusMP + bootsStats.bonusMP + mainHandStats.bonusMP + offHandStats.bonusMP + ring1Stats.bonusMP + ring2Stats.bonusMP + amuletStats.bonusMP;
        
        bonusStats[2] = bodyStats.bonusEP + headStats.bonusEP + legsStats.bonusEP + bootsStats.bonusEP + mainHandStats.bonusEP + offHandStats.bonusEP + ring1Stats.bonusEP + ring2Stats.bonusEP + amuletStats.bonusEP;
        
        bonusStats[3] = bodyStats.bonusSTR + headStats.bonusSTR + legsStats.bonusSTR + bootsStats.bonusSTR + mainHandStats.bonusSTR + offHandStats.bonusSTR + ring1Stats.bonusSTR + ring2Stats.bonusSTR + amuletStats.bonusSTR;
        
        bonusStats[4] = bodyStats.bonusAGL + headStats.bonusAGL + legsStats.bonusAGL + bootsStats.bonusAGL + mainHandStats.bonusAGL + offHandStats.bonusAGL + ring1Stats.bonusAGL + ring2Stats.bonusAGL + amuletStats.bonusAGL;
        
        bonusStats[5] = bodyStats.bonusINT + headStats.bonusINT + legsStats.bonusINT + bootsStats.bonusINT + mainHandStats.bonusINT + offHandStats.bonusINT + ring1Stats.bonusINT + ring2Stats.bonusINT + amuletStats.bonusINT;
        
        bonusStats[6] = bodyStats.bonusDEF + headStats.bonusDEF + legsStats.bonusDEF + bootsStats.bonusDEF + mainHandStats.bonusDEF + offHandStats.bonusDEF + ring1Stats.bonusDEF + ring2Stats.bonusDEF + amuletStats.bonusDEF;
        
        bonusStats[7] = bodyStats.bonusDMG + headStats.bonusDMG + legsStats.bonusDMG + bootsStats.bonusDMG + mainHandStats.bonusDMG + offHandStats.bonusDMG + ring1Stats.bonusDMG + ring2Stats.bonusDMG + amuletStats.bonusDMG;  
    }
}

function fullFillStats()
{
    if(!inDungeon)
    {
       HP = maxHP;
        EP = maxEP;
        MP = maxMP; 
    }
}





