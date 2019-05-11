//test button
document.querySelector("#testButton").addEventListener("click", function () {
    addItem(testSword);
    addItem(testArmor);
    addItem(testBucket);
    addItem(testRing);
    console.log("bonus hp: " + bonusStats[0] + "bonus mp: " + bonusStats[1] + "bonus ep: " + bonusStats[2]);
    fullFillStats();
});

function fullFillStats()
{
    HP = maxHP;
    EP = maxEP;
    MP = maxMP;
}