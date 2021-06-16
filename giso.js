const gisoDataFile = "gisodata.json";
//const gisoDataFile = "https://character-service.dndbeyond.com/character/v3/character/52423116";

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if(this.readyState == 4 & this.status == 200){
        var response = JSON.parse(xhttp.responseText);
        console.log(response[0].data.id)
        var gisoAvatar = response[0].data.avatarUrl;
        document.getElementById("avatar").src = gisoAvatar;
        document.getElementById("name").innerText = response[0].data.name;
        document.getElementById("baseRaceName").innerText = response[0].data.race.baseRaceName;
        document.getElementById("walk").innerText = response[0].data.race.weightSpeeds.normal.walk;
        document.getElementById("baseHitPoints").innerText = response[0].data.baseHitPoints;
        document.getElementById("removedHitPoints").innerText = response[0].data.removedHitPoints;
        document.getElementById("temporaryHitPoints").innerText = response[0].data.temporaryHitPoints;
        document.getElementById("strength").innerText = response[0].data.stats[0].value;
        document.getElementById("dexterity").innerText = response[0].data.stats[1].value;
        document.getElementById("constitution").innerText = response[0].data.stats[2].value;
        document.getElementById("intelligence").innerText = response[0].data.stats[3].value;
        document.getElementById("wisdom").innerText = response[0].data.stats[4].value;
        document.getElementById("charisma").innerText = response[0].data.stats[5].value;
    }
};
xhttp.open("GET", gisoDataFile, true);
xhttp.send();








