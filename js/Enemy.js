function enemy(lvl, name, HP, DMG, DEF)
{
    this.lvl = lvl;
    this.name = name;
    this.HP = HP;
    this.DMG = DMG;
    this.DEF = DEF;
}

let rat = new enemy(1, "Rat", 30, 5, 0);
let bigrat = new enemy(2, "Big rat", 60, 7, 0);
let blackrat = new enemy(1, "Black rat", 45, 10, 0);

let enemies = [rat, bigrat, blackrat];