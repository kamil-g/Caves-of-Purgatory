document.querySelector("#creationButton1").addEventListener("click", function(){
    setHeroName();
});

function setHeroName(){
    let x = document.querySelector("#insertName").value.toString();
    //to change
    if(x != null)
    {
        heroName = x;
        document.querySelector("#creation1").style.display = "none"; 
    }
    else
        alert("Name is null");
}

let selectedClass = "none";

document.querySelector("#rogueContainer").addEventListener("click", function(){
    handleClassClick("rogue");
});

document.querySelector("#slayerContainer").addEventListener("click", function(){
    handleClassClick("slayer");
});

document.querySelector("#abbotContainer").addEventListener("click", function(){
    handleClassClick("abbot");
});

document.querySelector("#asherContainer").addEventListener("click", function(){
    handleClassClick("asher");
});

document.querySelector("#alchemistContainer").addEventListener("click", function(){
    handleClassClick("alchemist");
});

document.querySelector("#mysticContainer").addEventListener("click", function(){
    handleClassClick("mystic");
});

function handleClassClick(clickedClass){
    document.querySelector("#rogueContainer").style.border = "2px solid yellow";
    document.querySelector("#slayerContainer").style.border = "2px solid yellow";
    document.querySelector("#abbotContainer").style.border = "2px solid yellow";
    document.querySelector("#asherContainer").style.border = "2px solid yellow";
    document.querySelector("#alchemistContainer").style.border = "2px solid yellow";
    document.querySelector("#mysticContainer").style.border = "2px solid yellow";
    
    document.querySelector("#" + clickedClass + "Container").style.border = "2px solid red";
    selectedClass = clickedClass.toString();
}

document.querySelector("#creationButton2").addEventListener("click", function(){
    setHeroClass(selectedClass);
    setHeroStatistics();
});
    
function setHeroClass(x){
    heroClass = x;
    document.querySelector("#creation2").style.display = "none"; 
}

//do refaktoryzacji !!!
function setHeroStatistics(){
    
    if(heroClass == "abbot")
        {
           baseHP = abbot.HP; 
           baseMP = abbot.MP; 
           baseEP = abbot.EP; 
           baseSTR = abbot.STR; 
           baseINT = abbot.INT; 
           baseAGL = abbot.AGL; 
        }
    else if(heroClass == "slayer")
        {
           baseHP = slayer.HP; 
           baseMP = slayer.MP; 
           baseEP = slayer.EP; 
           baseSTR = slayer.STR; 
           baseINT = slayer.INT; 
           baseAGL = slayer.AGL; 
        }
    else if(heroClass == "asher")
        {
           baseHP = asher.HP; 
           baseMP = asher.MP; 
           baseEP = asher.EP; 
           baseSTR = asher.STR; 
           baseINT = asher.INT; 
           baseAGL = asher.AGL; 
        }
    else if(heroClass == "rogue") 
        {
           baseHP = rogue.HP; 
           baseMP = rogue.MP; 
           baseEP = rogue.EP; 
           baseSTR = rogue.STR; 
           baseINT = rogue.INT; 
           baseAGL = rogue.AGL; 
        }
    else if(heroClass == "mystic")
        {
           baseHP = mystic.HP; 
           baseMP = mystic.MP; 
           baseEP = mystic.EP; 
           baseSTR = mystic.STR; 
           baseINT = mystic.INT; 
           baseAGL = mystic.AGL; 
        }
    else if(heroClass == "alchemist")
        {
           baseHP = alchemist.HP; 
           baseMP = alchemist.MP; 
           baseEP = alchemist.EP; 
           baseSTR = alchemist.STR; 
           baseINT = alchemist.INT; 
           baseAGL = alchemist.AGL; 
        }
    else 
        console.log("no class");

    console.log("class: " + heroClass + " | name: " + heroName + " | lvl: " + lvl + " | HP: " + maxHP + " | MP: " + maxMP + " | EP: " + maxEP + " | strength: " + strength + " | agility: " + agility + " | intellect: " + intellect);
}








