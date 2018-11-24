const characters = [
    {
        "id"            : 0,
        "name"          : "Cersei",
        "hp"            : 120,
        "attack"        : 8,
        "counterattack" : 15, // not sure of this //
        "image"       : "assets/images/cersei.jpg"
    },
    {
        "id"            : 1,
        "name"          : "Arya",
        "hp"            : 100,
        "attack"        : 8, // not sure of this //
        "counterattack" : 5,
        "image"       : "assets/images/arya.jpg"
    },
    {
        "id"            : 2,
        "name"          : "Jon Snow",
        "hp"            : 150,
        "attack"        : 8, // not sure of this //
        "counterattack" : 20,
        "image"       : "assets/images/jonsnow.jpg"
    },
    {
        "id"            : 3,
        "name"          : "Danaerys",
        "hp"            : 180,
        "attack"        : 8, // not sure of this //
        "counterattack" : 25,
        "image"       : "assets/images/danaerys.jpg"
    }
];

const characterSelectDiv = $("#characters");

function displayCharacters() {
    $.each(characters, function(i, character) {
        playerOption = $("<div>");
        var name = "<h4>" + characters[i].name + "</h4>";
        var image = "<img src='" + characters[i].image + "'>";
        var hp = "<h4>" + character.hp + " HP</h4>";
        playerOption.addClass("greenBorder");
        playerOption.html(name);
        playerOption.append(image);
        playerOption.append(hp);
        characterSelectDiv.append(playerOption);
    });
};

$(document).ready(function() {
    displayCharacters();

})