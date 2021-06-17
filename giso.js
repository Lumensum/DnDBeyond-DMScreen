const gisoDataFile = "gisodata.json";
const characterDataFiles = ["./gisodata.json", "./landerdata.json", "./azraeldata.json"];

//const gisoDataFile = "https://character-service.dndbeyond.com/character/v3/character/52423116";
//const gisoDataFile = "https://character-service.dndbeyond.com/character/v4/character/52423116";

//characterDataFiles[0] = "https://character-service.dndbeyond.com/character/v4/character/52423116";


var characterSizes = ["size0", "size1", "Tiny","Small","Medium","Large","HUGE","GIGANTIC!"];


var characterJSONData = [];







// for (let tempIndex = 0; tempIndex < characterDataFiles.length; tempIndex++) {
    
//     var xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function() {
//     if(this.readyState == 4 & this.status == 200){
//         var response = JSON.parse(xhttp.responseText);
     
//         characterJSONData[tempIndex] = response[0].data;
//         console.log("Player ID: " , characterJSONData[tempIndex].id)

        
//         console.log("SetData with" , tempIndex);
//         setData(tempIndex);

//         console.table(characterJSONData);

//     }
// };


// xhttp.open("GET", characterDataFiles[tempIndex], true);
// // console.log("characterJSONData[", tempIndex,"] : " , characterJSONData[tempIndex]);
// // console.log("characterDataFiles[", tempIndex,"] : " , characterDataFiles[tempIndex]);




// xhttp.send();




// }



// var textCharactedIndex = 0;

// fetch(characterDataFiles[textCharactedIndex])
//   .then(response => response.json())
//   .then(data => {
    
//     characterJSONData[textCharactedIndex].push(data.data);
    
//    // console.log(data.data.baseHitPoints);
//     //console.log(data.data.race.baseRaceName);


//     //console.log(data);
//   }
//   )
//   .catch(err => console.log(error));



fetch(characterDataFiles[0])
  .then(response => response.json())
  .then(data => {
    characterJSONData[0].push(data.data);
  }
  )
  .catch(err => console.log(error));



console.log("Table 0", characterJSONData[0]);
console.log("Naam: ", characterJSONData[0].name);

characterJSONData[0] = JS.parse("./gisodate.json");

function setData(characterIndex){


    

    const newCard = `
     <div class="card">
        <h1 class="card__header">
            ${characterJSONData[characterIndex].name}
        </h1>
        <img src="${characterJSONData[characterIndex].avatarUrl}" alt="" id="avatar" width="100">

        <div class="hitpoints">
            <p>HP: <span class="hitpoints__current">
            ${(characterJSONData[characterIndex].baseHitPoints - characterJSONData[characterIndex].removedHitPoints)}
            </span> / <span class="hitpoints__max">
            ${(characterJSONData[characterIndex].baseHitPoints)}
            </span></p>
            <p>TEMP: <span class="hitpoints__temp">
            ${characterJSONData[characterIndex].temporaryHitPoints}</span></p>
        </div>
     
        <div class="size">
            ${characterSizes[characterJSONData[characterIndex].race.sizeId]}
            ${characterJSONData[characterIndex].race.baseRaceName}
        </div>
 
        <div class="armorclass">
            AC<br>${10 + Math.floor((characterJSONData[characterIndex].stats[1].value - 10)/2)}
        </div>
 
        <div class="currencies">
            <span>${characterJSONData[characterIndex].currencies.pp}</span> pp | 
            <span>${characterJSONData[characterIndex].currencies.gp}</span> gp | 
            <span>${characterJSONData[characterIndex].currencies.sp}</span> sp |
            <span>${characterJSONData[characterIndex].currencies.cp}</span> cp
        </div>
 
        <div class="speed">
            <h2 class="speed__header">Speed</h2>
            <div>Walking: ${characterJSONData[characterIndex].race.weightSpeeds.normal.walk} ft (${Math.floor(characterJSONData[characterIndex].race.weightSpeeds.normal.walk/5)} hokjes)</div>
            <div>Flying: ${characterJSONData[characterIndex].race.weightSpeeds.normal.fly} ft (${Math.floor(characterJSONData[characterIndex].race.weightSpeeds.normal.fly/5)} hokjes)</div>
            
        </div>
 
       

        <div><span id="classes0__definition__name"></span> <span id="classes0__level"></span></div>
        <div><span id="classes1__definition__name"></span> <span id="classes1__level"></span></div>

        <div class="stats">
            <div class="stats__stat__name">Str<br><span class="stats__stat__value"></span> (<span class="stats__stat__value--modifier"></span>)</div>
            <div class="stats__stat__name">Dex<br><span class="stats__stat__value"></span> (<span class="stats__stat__value--modifier"></span>)</div>
            <div class="stats__stat__name">Con<br><span class="stats__stat__value"></span> (<span class="stats__stat__value--modifier"></span>)</div>
            <div class="stats__stat__name">Int<br><span class="stats__stat__value"></span> (<span class="stats__stat__value--modifier"></span>)</div>
            <div class="stats__stat__name">Wis<br><span class="stats__stat__value"></span> (<span class="stats__stat__value--modifier"></span>)</div>
            <div class="stats__stat__name">Cha<br><span class="stats__stat__value"></span> (<span class="stats__stat__value--modifier"></span>)</div>
        </div>
 
        <div class="feats">
            Feats
            <ul id="feats__list">
            </ul>
        </div>

     </div>

    `;

    const cardContainer = document.getElementById("dmscreen-id");
    cardContainer.innerHTML += newCard;





    
        
        // document.getElementById("classes0__definition__name").innerText = characterJSONData[characterIndex].classes[0].definition.name;
        // document.getElementById("classes0__level").innerText = characterJSONData[characterIndex].classes[0].level;
        // document.getElementById("classes1__definition__name").innerText = characterJSONData[characterIndex].classes[1].definition.name;
        // document.getElementById("classes1__level").innerText = characterJSONData[characterIndex].classes[1].level;
     


        // document.getElementById("currencies__cp").innerText = characterJSONData[characterIndex].currencies.cp;
        // document.getElementById("currencies__sp").innerText = characterJSONData[characterIndex].currencies.sp;
        // document.getElementById("currencies__gp").innerText = characterJSONData[characterIndex].currencies.gp;
        // document.getElementById("currencies__pp").innerText = characterJSONData[characterIndex].currencies.pp;


        
        // document.getElementById("hitpoints__max").innerText = characterJSONData[characterIndex].baseHitPoints;
        // document.getElementById("hitpoints__current").innerText = (characterJSONData[characterIndex].baseHitPoints - characterJSONData[characterIndex].removedHitPoints);
        // document.getElementById("hitpoints__temp").innerText = characterJSONData[characterIndex].temporaryHitPoints;

        // document.getElementById("strength").innerText = characterJSONData[characterIndex].stats[0].value;
        // document.getElementById("strength--modifier").innerText = Math.floor((characterJSONData[characterIndex].stats[0].value - 10)/2);
        // document.getElementById("dexterity").innerText = characterJSONData[characterIndex].stats[1].value;
        // document.getElementById("dexterity--modifier").innerText = Math.floor((characterJSONData[characterIndex].stats[1].value - 10)/2);
        // document.getElementById("constitution").innerText = characterJSONData[characterIndex].stats[2].value;
        // document.getElementById("constitution--modifier").innerText = Math.floor((characterJSONData[characterIndex].stats[2].value - 10)/2);
        // document.getElementById("intelligence").innerText = characterJSONData[characterIndex].stats[3].value;
        // document.getElementById("intelligence--modifier").innerText = Math.floor((characterJSONData[characterIndex].stats[3].value - 10)/2);
        // document.getElementById("wisdom").innerText = characterJSONData[characterIndex].stats[4].value;
        // document.getElementById("wisdom--modifier").innerText = Math.floor((characterJSONData[characterIndex].stats[4].value - 10)/2);
        // document.getElementById("charisma").innerText = characterJSONData[characterIndex].stats[5].value;
        // document.getElementById("charisma--modifier").innerText = Math.floor((characterJSONData[characterIndex].stats[5].value - 10)/2);
        
        // console.log("Number of feats: ", characterJSONData[characterIndex].feats.length);


        // for (let index = 0; index < characterJSONData[characterIndex].modifiers.race.length; index++) {
        //     console.log("Modifier " , characterJSONData[characterIndex].modifiers.race[index].type , " " , characterJSONData[characterIndex].modifiers.race[index].subType , " : ", characterJSONData[characterIndex].modifiers.race[index].fixedValue);
            
        // }

        // for (let index = 0; index < characterJSONData[characterIndex].modifiers.class.length; index++) {
        //     console.log("Modifier " , characterJSONData[characterIndex].modifiers.class[index].type , " " , characterJSONData[characterIndex].modifiers.class[index].subType , " : ", characterJSONData[characterIndex].modifiers.class[index].fixedValue);
            
        // }

        // for (let index = 0; index < characterJSONData[characterIndex].modifiers.background.length; index++) {
        //     console.log("Modifier " , characterJSONData[characterIndex].modifiers.background[index].type , " " , characterJSONData[characterIndex].modifiers.background[index].subType , " : ", characterJSONData[characterIndex].modifiers.background[index].fixedValue);
            
        // }

        // for (let index = 0; index < characterJSONData[characterIndex].modifiers.item.length; index++) {
        //     console.log("Modifier " , characterJSONData[characterIndex].modifiers.item[index].type , " " , characterJSONData[characterIndex].modifiers.item[index].subType , " : ", characterJSONData[characterIndex].modifiers.item[index].fixedValue);
            
        // }

        // for (let index = 0; index < characterJSONData[characterIndex].modifiers.feat.length; index++) {
        //     console.log("Modifier " , characterJSONData[characterIndex].modifiers.feat[index].type , " " , characterJSONData[characterIndex].modifiers.feat[index].subType , " : ", characterJSONData[characterIndex].modifiers.feat[index].fixedValue);
            
        // }

        // for (let index = 0; index < characterJSONData[characterIndex].modifiers.condition.length; index++) {
        //     console.log("Modifier " , characterJSONData[characterIndex].modifiers.condition[index].type , " " , characterJSONData[characterIndex].modifiers.condition[index].subType , " : ", characterJSONData[characterIndex].modifiers.condition[index].fixedValue);
            
        // }



        // for (let index = 0; index < characterJSONData[characterIndex].feats.length; index++) {
        //     var li = document.createElement('li');
        //     li.innerHTML=characterJSONData[characterIndex].feats[index].definition.name;
        //     document.getElementById("feats__list").appendChild(li);
        // }
        

}


