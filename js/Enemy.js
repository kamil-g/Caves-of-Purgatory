function enemy(lvl, name, HP, DMG, DEF)
{
    this.lvl = lvl;
    this.name = name;
    this.HP = HP;
    this.DMG = DMG;
    this.DEF = DEF;
}

//rats
let rat = new enemy(1, "Rat", 30, 5, 0);
let bigrat = new enemy(2, "Big rat", 60, 7, 0);
let blackrat = new enemy(1, "Black rat", 45, 10, 0);
let poisonousrat = new enemy(2, "Poisonous rat", 40, 16, 0);

//goblins
let goblin = new enemy(2, "Goblin", 60, 14, 8);
let blackgoblin = new enemy(3, "Black goblin", 80, 18, 10);
let redgoblin = new enemy(3, "Red goblin", 90, 22, 12);
let goblinshaman = new enemy(3, "Goblin shaman", 65, 36, 6);
let undeadgoblin = new enemy(4, "Undead goblin", 200, 20, 15);

//undead
let zombie = new enemy(4, "Zombie", 260, 29, 21);
let poisonouszombie = new enemy(5, "Poisonous zombie", 220, 42, 13);
let skeleton = new enemy(5, "Skeleton", 170, 56, 12);
let dementedgravekeeper = new enemy(6, "Demented gravekeeper", 370, 37, 25);
let fallenknight = new enemy(6, "Fallen knight", 320, 70, 15);
let darkmage = new enemy(6, "Dark mage", 230, 84, 12);
let cursedghoul = new enemy(7, "Cursed ghoul", 500, 60, 25);

//demonic
let demonservant = new enemy(7, "Demon servant", 380, 80, 19);
let frenziedassassin = new enemy(7, "Frenzied assassin", 420, 100, 15);
let furiousbeast = new enemy(7, "Furious beast", 550, 67, 30);
let demonicskeleton = new enemy(7, "Demonic skeleton", 300, 117, 16);

//bosses
let souldevourer = new enemy(8, "Soul devourer", 650, 130, 40);
let shadowlord = new enemy(9, "Shadow lord", 700, 180, 45);
let overlordofpurgatory = new enemy(12, "Overlord of Purgatory", 1337, 420, 69);


let enemies = [rat, bigrat, blackrat, poisonousrat, goblin, zombie, souldevourer, overlordofpurgatory, furiousbeast, fallenknight, undeadgoblin, dementedgravekeeper];

