function swapWindow(x)
{
    document.querySelector("#statsWindow").style.display = "none";
    document.querySelector("#emptyWindow1").style.display = "none";
    document.querySelector("#emptyWindow2").style.display = "none";
    document.querySelector("#emptyWindow3").style.display = "none";
    
    document.querySelector(x).style.display = "block";
};

document.querySelector("#statsWindowButton").addEventListener("click", function(){
    swapWindow("#statsWindow");
});

document.querySelector("#emptyWindow1Button").addEventListener("click", function(){
    swapWindow("#emptyWindow1");
});

document.querySelector("#emptyWindow2Button").addEventListener("click", function(){
    swapWindow("#emptyWindow2");
});

document.querySelector("#emptyWindow3Button").addEventListener("click", function(){
    swapWindow("#emptyWindow3");
});

function swapGameWindow(x){
    document.querySelector("#cityWindow").style.display = "none";
    document.querySelector("#academyWindow").style.display = "none";
    document.querySelector("#smithyWindow").style.display = "none";
    document.querySelector("#barracksWindow").style.display = "none";
    document.querySelector("#dungeonWindow").style.display = "none";
    document.querySelector("#magicshopWindow").style.display = "none";
    
    document.querySelector(x).style.display = "block";
};

document.querySelector("#academyButton").addEventListener("click", function(){
    swapGameWindow("#academyWindow");
});

document.querySelector("#smithyButton").addEventListener("click", function(){
    swapGameWindow("#smithyWindow");
});

document.querySelector("#barracksButton").addEventListener("click", function(){
    swapGameWindow("#barracksWindow");
});

document.querySelector("#dungeonButton").addEventListener("click", function(){
    swapGameWindow("#dungeonWindow");
});

document.querySelector("#magicshopButton").addEventListener("click", function(){
    swapGameWindow("#magicshopWindow");
});

function swapSmallWindow(x)
{
    document.querySelector("#skillTreeWindow").style.display = "none";
    document.querySelector("#skillBookWindow").style.display = "none";
    document.querySelector("#alchemyWindow").style.display = "none";
    
    document.querySelector(x).style.display = "block";
}

document.querySelector("#skillTreeWindowButton").addEventListener("click", function(){
    swapSmallWindow("#skillTreeWindow");
});

document.querySelector("#skillBookWindowButton").addEventListener("click", function(){
    swapSmallWindow("#skillBookWindow");
});

document.querySelector("#alchemyWindowButton").addEventListener("click", function(){
    swapSmallWindow("#alchemyWindow");
});

function shutDownAllWindows()
{
    document.querySelector("#skillTreeWindow").style.display = "none";
    document.querySelector("#skillBookWindow").style.display = "none";
    document.querySelector("#alchemyWindow").style.display = "none";
    document.querySelector("#cityWindow").style.display = "block";
    document.querySelector("#academyWindow").style.display = "none";
    document.querySelector("#smithyWindow").style.display = "none";
    document.querySelector("#barracksWindow").style.display = "none";
    document.querySelector("#dungeonWindow").style.display = "none";
    document.querySelector("#magicshopWindow").style.display = "none";
}

document.querySelector("#backToCityButton").addEventListener("click", function(){
    shutDownAllWindows();
});

















