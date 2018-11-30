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
var gameover = false;
var opponentsDefeated = 0;

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
        $(player).removeClass("playerSelect").addClass("notDisplayed");
        playerCharacter = characters[id];
        // characters.splice(id, 1);
        console.log(playerCharacter);
        console.log(characters);
        characterSelected = true;
        $(".playerSelect").removeClass("playerSelect").addClass("opponentSelect");
        $("#instructions").empty();
        $("#instructions").text("Choose your opponent");
    }
}

function chooseOpponent(opponent) {
    if (characterSelected && !opponentSelected) {
        var id = $(opponent).attr("id");
        $(opponent).removeClass("opponentSelect").addClass("notDisplayed");
        opponentCharacter = characters[id];
        // characters.splice(id, 1);
        console.log(opponentCharacter);
        console.log(characters);
        opponentSelected = true;
        $(".opponentSelect").removeClass("opponentSelect").addClass("standBy");
        $("#outcome").empty();
        
        if (battleTime) {
            displayBattleOpponent();
        }
        
    }
}

function displayBattleOpponent() {
    var battleOpponent = $("<div>");
    var opponentName = "<h4>" + opponentCharacter.name + "</h4>";
    var opponentImage = "<img src='" + opponentCharacter.image + "'>";
    var opponentHP = "<h6 class='opponentHP'>" + opponentCharacter.hp + " HP</h6>";
    battleOpponent.html(opponentName);
    battleOpponent.attr("id", "opponentDiv");
    battleOpponent.append(opponentImage);
    battleOpponent.append(opponentHP);
    battleDiv.append(battleOpponent);
    $(battleOpponent).addClass("opponentSelected");
    $("#instructions").empty();
    opponentsDefeated++;
}

function battle() {
    if (characterSelected && opponentSelected && !battleTime) {

        // characterSelectDiv.empty();
        // displayCharacters();
        // $(".playerSelect").removeClass("playerSelect").addClass("opponentSelect");

        $("#battle-instructions").text("Battle Ground");
        
        var battlePlayer = $("<div>");
        var playerName = "<h4>" + playerCharacter.name + "</h4>";
        var playerImage = "<img src='" + playerCharacter.image + "'>";
        var playerHP = "<h6 class='playerHP'>" + playerCharacter.hp + " HP</h6>";
        battlePlayer.html(playerName);
        battlePlayer.append(playerImage);
        battlePlayer.append(playerHP);
        battleDiv.append(battlePlayer);
        $(battlePlayer).addClass("playerSelected");
        var playerAttack = playerCharacter.attack;

        var attackButton = $("<button>");
        attackButton.html("ATTACK");
        battleDiv.append(attackButton);

        displayBattleOpponent();

        battleTime = true;
    };
        

    function dealDamage () {
        if (opponentSelected) {

            opponentCharacter.hp -= playerAttack;
            opponentHP = "<h6 class='opponentHP'>" + opponentCharacter.hp + " HP</h6>";
            $(".opponentHP").empty();
            $(".opponentHP").append(opponentHP);

            if (opponentCharacter.hp <= 0 && opponentsDefeated === 3 && playerCharacter.hp > 0) {
                $("#outcome").html("You win! Refresh to play again.");
                gameover = true;
            }
            else {
                playerCharacter.hp -= opponentCharacter.counterattack;
                playerHP = "<h6 class='playerHP'>" + playerCharacter.hp + " HP</h6>";
                $(".playerHP").empty();
                $(".playerHP").append(playerHP);

                if (playerCharacter.hp <= 0) {
                    $("#outcome").html("You lose. Refresh to play again.");
                    gameover = true;
                }
                else {
                    console.log(playerCharacter.hp);
                    $("#outcome").html("You attacked " + opponentCharacter.name + " for " + playerAttack + " damage.<br/>" + opponentCharacter.name + " counterattacked for " + opponentCharacter.counterattack + " damage.");
                    playerAttack += playerCharacter.attack;
                    console.log(opponentCharacter.hp);
                    if (opponentCharacter.hp <= 0) {
                        $("#outcome").html(opponentCharacter.name + " was defeated.<br/>Choose another opponent.");
                        opponentSelected = false;
                        $("#opponentDiv").remove();
                        $(".standBy").removeClass("standBy").addClass("opponentSelect");
                    };
                };
            };
        }
    };

    $(attackButton).click(function(){
        dealDamage();
    });  

};

$(document).ready(function() {
    displayCharacters();

    $(".playerSelect").click(function(){
        chooseCharacter(this); 

        $(".opponentSelect").click(function(){
            chooseOpponent(this);
            battle();
        });
    });
});