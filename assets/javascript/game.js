const characters = [
    {
        "name"          : "Cersei Lannister",
        "hp"            : 120,
        "attack"        : 8,
        "counterattack" : 15, // not sure of this //
        "picture"       : "assets/images/cersei.jpg"
    },
    {
        "name"          : "Arya Stark",
        "hp"            : 100,
        "attack"        : 8, // not sure of this //
        "counterattack" : 5,
        "picture"       : "assets/images/arya.jpg"
    },
    {
        "name"          : "Jon Snow",
        "hp"            : 150,
        "attack"        : 8, // not sure of this //
        "counterattack" : 20,
        "picture"       : "assets/images/jonsnow"
    },
    {
        "name"          : "Danaerys Targaryan",
        "hp"            : 180,
        "attack"        : 8, // not sure of this //
        "counterattack" : 25,
        "picture"       : "assets/images/danaerys"
    }
];

var characterSelectDiv = $("#characters");

$.each(characters, function(i, character) {
    characterSelectDiv.append("<div>" + character.name + "</div>");
});