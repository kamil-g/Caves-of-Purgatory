//array of html divs
let slots = [];
for(let i = 0; i <= 24; i++){
    slots.push(document.querySelector("#inventorySlot" + i));
} 

//eq html divs
let headSlot = document.querySelector("#headSlot"),
    bodySlot = document.querySelector("#bodySlot"),
    legsSlot = document.querySelector("#legsSlot"),
    ring1Slot = document.querySelector("#ring1Slot"),
    ring2Slot = document.querySelector("#ring2Slot"),
    bootsSlot = document.querySelector("#bootsSlot"),
    mainHandSlot = document.querySelector("#mainHandSlot"),
    offHandSlot = document.querySelector("#offHandSlot"),
    amuletSlot = document.querySelector("#amuletSlot");

//constructor of slots objects
function inventorySlot(slot, isEmpty, item){
    this.isEmpty = isEmpty;
    this.slot = slot;
    this.item = item;
};

function equipmentSlots(slot, item){
    this.slot = slot;
    this.item = item;
}

//array of slot objects
let iSlots = [];
for(let i = 0; i <= 24; i++){
    iSlots.push(new inventorySlot(slots[i], false, null));
} 

 let head = new equipmentSlots(headSlot, null);
 let body = new equipmentSlots(bodySlot, null);
 let legs = new equipmentSlots(legsSlot, null);
 let boots = new equipmentSlots(bootsSlot, null);
 let ring1 = new equipmentSlots(ring1Slot, null);
 let ring2 = new equipmentSlots(ring2Slot, null);
 let amulet = new equipmentSlots(amuletSlot, null);
 let mainHand = new equipmentSlots(mainHandSlot, null);
 let offHand = new equipmentSlots(offHandSlot, null);

let eqSlots = [head, body, legs, boots, ring1, ring2, amulet, mainHand, offHand];

//update of divs look
function eqUpdate(){
    for(let i = 0; i <= 24; i++){
        if(iSlots[i].item != null)
        {
            iSlots[i].slot.style.backgroundImage = "url(" + iSlots[i].item.icon + ")";
            iSlots[i].slot.innerHTML = iSlots[i].item.name;
        }
    }
    for(let i = 0; i <= 8; i++){
        if(eqSlots[i].item != null)
        {
            eqSlots[i].slot.style.backgroundImage = "url(" + eqSlots[i].item.icon + ")";
            eqSlots[i].slot.innerHTML = eqSlots[i].item.name;
        }
    }
    //console.log("eq updated");
};

//adding new items to inventory
function addItem(newItem)
{
    for(let i = 0; i <= 24; i++){
        if(iSlots[i].item == null)
            {
                iSlots[i].item = newItem;  
                eqUpdate();
                break;
            }
    }
};

//adding listeners to html divs
for(let i = 0; i <= 24; i++){
    slots[i].addEventListener("click", function(){
        useItem(iSlots[i]);
    });
}

//using items
function useItem(slotID)
{
    if(slotID.item != null)
    {
        equipItem(slotID);
    }
}


//clearing slots
function clearSlot(slotID)
{
    slotID.item = null;
    slotID.slot.style.backgroundImage = null;
    slotID.slot.innerHTML = null;
    eqUpdate();
}

//equipping items
function equipItem(slotID)
{
    let equipped = false;
    let ringsFull = false;
    
    if(slotID.item == otherItem || slotID.item == potion)
    {
        console.log("not equippable item")
    }
    else
    {      
        if(slotID.item.type == "1h" && mainHand.item == null)
        {
            mainHand.item = slotID.item; 
        }
        else if(slotID.item.type == "2h" && offHand.item == null && mainHand == null)
        {
            mainHand.item = slotID.item;
            offHandHand.item = slotID.item;
        }
        else if(slotID.item.type == "offh" && offHand.item == null)
        {
            offHand.item = slotID.item;
        }
        else if(slotID.item.type == "body" && body.item == null)
        {
            body.item = slotID.item;
        }
        else if(slotID.item.type == "ring")
        {
            if(ring1.item == null && ring2.item == null)
                ring1.item = slotID.item;
            else if(ring1.item != null && ring2.item == null)
                ring2.item = slotID.item;   
            else if(ring1.item == null && ring2.item != null)
                ring1.item = slotID.item;
            else if(ring1.item != null && ring2.item != null)
                ringsFull = true;
        }
        else if(slotID.item.type == "amulet" && amulet.item == null)
        {
            amulet.item = slotID.item;
        }
        else
        {
            console.log("cant equip");  
            equipped = true;
        }     
    }
    if(equipped == false)
    {
        if(ringsFull == false)
            {
                clearSlot(slotID); 
            }
        else
            ringsFull = false;
    }
    equipped = false;
};

//listeners to eqSlots
for(let i = 0; i <= 8; i++)
{
    eqSlots[i].slot.addEventListener("click", function(){
        unequip(eqSlots[i]);
    })
};

//unequipping items
function unequip(eqSlot)
{
    for(let i = 0; i <= 24; i++){
        if(iSlots[i].item == null)
            {
                addItem(eqSlot.item);
                eqSlot.item = null; 
                eqSlot.slot.style.backgroundImage = "";
                eqSlot.slot.innerHTML = "";
                break;
            }
        else
            console.log("no place");
    }
};
















