const characters = [
    {
        "name"          : "Cersei",
        "hp"            : 120,
        "attack"        : 8,
        "counterattack" : 15, // not sure of this //
        "image"         : "assets/images/cersei.jpg"
    },
    {
        "name"          : "Arya",
        "hp"            : 100,
        "attack"        : 8, // not sure of this //
        "counterattack" : 5,
        "image"         : "assets/images/arya.jpg"
    },
    {
        "name"          : "Jon Snow",
        "hp"            : 150,
        "attack"        : 8, // not sure of this //
        "counterattack" : 20,
        "image"         : "assets/images/jonsnow.jpg"
    },
    {
        "name"          : "Danaerys",
        "hp"            : 180,
        "attack"        : 8, // not sure of this //
        "counterattack" : 25,
        "image"         : "assets/images/danaerys.jpg"
    }
];

const characterSelectDiv = $("#characters");
const battleDiv = $("#battle");
var playerCharacter;
var opponentCharacter;
var playerOption;
var characterSelected = false;
var opponentSelected = false;
var battleTime = false;

function displayCharacters() {
    $.each(characters, function(i, character) {
        playerOption = $("<div>");
        var name = "<h4>" + characters[i].name + "</h4>";
        var image = "<img src='" + characters[i].image + "'>";
        var hp = "<h6>" + character.hp + " HP</h6>";
        playerOption.addClass("playerSelect");
        playerOption.attr("id", i);
        playerOption.html(name);
        playerOption.append(image);
        playerOption.append(hp);
        characterSelectDiv.append(playerOption);
    });
};

function chooseCharacter(player) {
    if (!characterSelected) {
        var id = $(player).attr("id");
        $(player).removeClass("playerSelect").addClass("playerSelected");
        playerCharacter = characters[id];
        console.log(playerCharacter);
        characterSelected = true;
        $(".playerSelect").removeClass("playerSelect").addClass("opponentSelect");
        $("#instructions").empty();
        $("#instructions").text("Choose your opponent!");
    }
}

function chooseOpponent(opponent) {
    if (characterSelected && !opponentSelected) {
        var id = $(opponent).attr("id");
        $(opponent).removeClass("opponentSelect").addClass("opponentSelected");
        opponentCharacter = characters[id];
        console.log(opponentCharacter);
        opponentSelected = true;
        $(".opponentSelect").removeClass("opponentSelect");
        $("#instructions").empty();
    }
}

function battle() {
    if (characterSelected && opponentSelected && !battleTime) {

        $("#battle-instructions").text("Battle Ground");
        var battlePlayer = $("<div>");
        var name = "<h4>" + playerCharacter.name + "</h4>";
        var image = "<img src='" + playerCharacter.image + "'>";
        var hp = "<h6>" + playerCharacter.hp + " HP</h6>";
        battlePlayer.html(name);
        battlePlayer.append(image);
        battlePlayer.append(hp);
        battleDiv.append(battlePlayer);

        var attackButton = $("<button>");
        attackButton.html("ATTACK");
        battleDiv.append(attackButton);

        var battleOpponent = $("<div>");
        var name = "<h4>" + opponentCharacter.name + "</h4>";
        var image = "<img src='" + opponentCharacter.image + "'>";
        var hp = "<h6>" + opponentCharacter.hp + " HP</h6>";
        battleOpponent.html(name);
        battleOpponent.append(image);
        battleOpponent.append(hp);
        battleDiv.append(battleOpponent);

        battleTime = true;
    }
    function dealDamage () {
        opponentCharacter.hp = opponentCharacter.hp - playerCharacter.attack;
        $(battleOpponent).innerHTML(hp);
    }
    $(attackButton).click(function(){
        dealDamage();
    })   
}

$(document).ready(function() {
    displayCharacters();

    $(".playerSelect").click(function(){
        chooseCharacter(this); 

        $(".opponentSelect").click(function(){
            chooseOpponent(this);
            battle();
        });
    });
})