//item types
function weapon(id, icon, name, type, price, bonusHP, bonusMP, bonusEP, bonusSTR, bonusAGL, bonusINT, bonusDMG, unique){
    this.id = id;
    this.icon = icon;
    this.name = name;
    this.type = type;
    this.price = price;
    this.bonusDMG = bonusDMG;
    this.bonusHP = bonusHP;
    this.bonusMP = bonusMP;
    this.bonusEP = bonusEP;
    this.bonusSTR = bonusSTR;
    this.bonusAGL = bonusAGL;
    this.bonusINT = bonusINT;
    this.unique = unique;
};

function armor(id, icon, name, type, price, bonusHP, bonusMP, bonusEP, bonusSTR, bonusAGL, bonusINT, bonusDEF, unique){
    this.id = id;
    this.icon = icon;
    this.name = name;
    this.type = type;
    this.price = price;
    this.bonusDMG = bonusDEF;
    this.bonusHP = bonusHP;
    this.bonusMP = bonusMP;
    this.bonusEP = bonusEP;
    this.bonusSTR = bonusSTR;
    this.bonusAGL = bonusAGL;
    this.bonusINT = bonusINT;
    this.unique = unique;
};

function accessory(id, icon, name, type, price, bonusDEF, bonusHP, bonusMP, bonusEP, bonusSTR, bonusAGL, bonusINT, unique){
    this.id = id;
    this.icon = icon;
    this.name = name;
    this.type = type;
    this.price = price;
    this.bonusDMG = bonusDEF;
    this.bonusHP = bonusHP;
    this.bonusMP = bonusMP;
    this.bonusEP = bonusEP;
    this.bonusSTR = bonusSTR;
    this.bonusAGL = bonusAGL;
    this.bonusINT = bonusINT;
    this.unique = unique;
};

function potion(id, icon, name, type, price, recHP, recMP, recEP){
    this.id = id;
    this.icon = icon;
    this.name = name;
    this.type = type;
    this.price = price;
    this.recHP = recHP;
    this.recMP = recMP;
    this.recEP = recEP;
};

function otherItem(id, icon, name, type, price){
    this.id = id;
    this.icon = icon;
    this.name = name;
    this.type = type;
    this.price = price;
};
    
//items
const testSword = new weapon(0, "images/testSword.png", "Test Sword", "1h", 100, 10, 10, 0, 0, 5, 0, 0, "normal");
const testArmor = new armor(0, "images/testArmor.png", "Test Armor", "body", 100, 25, 0, 10, 10, 0, 0, 50, "normal");
const testBucket = new otherItem(0, "images/testBucket.png", "Bucket", "", 100);











