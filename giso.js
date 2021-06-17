const gisoDataFile = "gisodata.json";
//const gisoDataFile = "https://character-service.dndbeyond.com/character/v3/character/52423116";


var tempIndex = 0;

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if(this.readyState == 4 & this.status == 200){
        var response = JSON.parse(xhttp.responseText);
        

        

        let characterJSONData = response[tempIndex].data;
        console.log("Player ID: " , characterJSONData.id)

        let armorclass = 10 + Math.floor((characterJSONData.stats[1].value - 10)/2);


        

        document.getElementById("avatar").src = characterJSONData.avatarUrl;
        document.getElementById("name").innerText = characterJSONData.name;
        document.getElementById("baseRaceName").innerText = characterJSONData.race.baseRaceName;
        document.getElementById("classes0__definition__name").innerText = characterJSONData.classes[0].definition.name;
        document.getElementById("classes0__level").innerText = characterJSONData.classes[0].level;
        document.getElementById("classes1__definition__name").innerText = characterJSONData.classes[1].definition.name;
        document.getElementById("classes1__level").innerText = characterJSONData.classes[1].level;
        
        document.getElementById("sizeId").innerText = characterJSONData.race.sizeId;

        document.getElementById("armorclass").innerText = armorclass;

        document.getElementById("currencies__cp").innerText = characterJSONData.currencies.cp;
        document.getElementById("currencies__sp").innerText = characterJSONData.currencies.sp;
        document.getElementById("currencies__gp").innerText = characterJSONData.currencies.gp;
        document.getElementById("currencies__pp").innerText = characterJSONData.currencies.pp;


        document.getElementById("walk").innerText = characterJSONData.race.weightSpeeds.normal.walk;
        document.getElementById("walk_hokjes").innerText = Math.floor(characterJSONData.race.weightSpeeds.normal.walk / 5);
        
        document.getElementById("fly").innerText = characterJSONData.race.weightSpeeds.normal.fly;
        document.getElementById("fly_hokjes").innerText = Math.floor(characterJSONData.race.weightSpeeds.normal.fly / 5);
        
        document.getElementById("hitpoints__max").innerText = characterJSONData.baseHitPoints;
        document.getElementById("hitpoints__current").innerText = (characterJSONData.baseHitPoints - characterJSONData.removedHitPoints);
        document.getElementById("hitpoints__temp").innerText = characterJSONData.temporaryHitPoints;

        document.getElementById("strength").innerText = characterJSONData.stats[0].value;
        document.getElementById("strength--modifier").innerText = Math.floor((characterJSONData.stats[0].value - 10)/2);
        document.getElementById("dexterity").innerText = characterJSONData.stats[1].value;
        document.getElementById("dexterity--modifier").innerText = Math.floor((characterJSONData.stats[1].value - 10)/2);
        document.getElementById("constitution").innerText = characterJSONData.stats[2].value;
        document.getElementById("constitution--modifier").innerText = Math.floor((characterJSONData.stats[2].value - 10)/2);
        document.getElementById("intelligence").innerText = characterJSONData.stats[3].value;
        document.getElementById("intelligence--modifier").innerText = Math.floor((characterJSONData.stats[3].value - 10)/2);
        document.getElementById("wisdom").innerText = characterJSONData.stats[4].value;
        document.getElementById("wisdom--modifier").innerText = Math.floor((characterJSONData.stats[4].value - 10)/2);
        document.getElementById("charisma").innerText = characterJSONData.stats[5].value;
        document.getElementById("charisma--modifier").innerText = Math.floor((characterJSONData.stats[5].value - 10)/2);
        
        console.log("Number of feats: ", characterJSONData.feats.length);


        for (let index = 0; index < characterJSONData.modifiers.race.length; index++) {
            console.log("Modifier " , characterJSONData.modifiers.race[index].type , " " , characterJSONData.modifiers.race[index].subType , " : ", characterJSONData.modifiers.race[index].fixedValue);
            
        }

        for (let index = 0; index < characterJSONData.modifiers.class.length; index++) {
            console.log("Modifier " , characterJSONData.modifiers.class[index].type , " " , characterJSONData.modifiers.class[index].subType , " : ", characterJSONData.modifiers.class[index].fixedValue);
            
        }

        for (let index = 0; index < characterJSONData.modifiers.background.length; index++) {
            console.log("Modifier " , characterJSONData.modifiers.background[index].type , " " , characterJSONData.modifiers.background[index].subType , " : ", characterJSONData.modifiers.background[index].fixedValue);
            
        }

        for (let index = 0; index < characterJSONData.modifiers.item.length; index++) {
            console.log("Modifier " , characterJSONData.modifiers.item[index].type , " " , characterJSONData.modifiers.item[index].subType , " : ", characterJSONData.modifiers.item[index].fixedValue);
            
        }

        for (let index = 0; index < characterJSONData.modifiers.feat.length; index++) {
            console.log("Modifier " , characterJSONData.modifiers.feat[index].type , " " , characterJSONData.modifiers.feat[index].subType , " : ", characterJSONData.modifiers.feat[index].fixedValue);
            
        }

        for (let index = 0; index < characterJSONData.modifiers.condition.length; index++) {
            console.log("Modifier " , characterJSONData.modifiers.condition[index].type , " " , characterJSONData.modifiers.condition[index].subType , " : ", characterJSONData.modifiers.condition[index].fixedValue);
            
        }



        for (let index = 0; index < characterJSONData.feats.length; index++) {
            var li = document.createElement('li');
            li.innerHTML=characterJSONData.feats[index].definition.name;
            document.getElementById("feats__list").appendChild(li);
        }
        


    }
};
xhttp.open("GET", gisoDataFile, true);
xhttp.send();








