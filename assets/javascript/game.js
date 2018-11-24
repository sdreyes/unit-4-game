const characters = [
    {
        "name"          : "Cersei Lannister",
        "hp"            : 120,
        "attack"        : 8,
        "counterattack" : 15, // not sure of this //
        "image"       : "assets/images/cersei.jpg"
    },
    {
        "name"          : "Arya Stark",
        "hp"            : 100,
        "attack"        : 8, // not sure of this //
        "counterattack" : 5,
        "image"       : "assets/images/arya.jpg"
    },
    {
        "name"          : "Jon Snow",
        "hp"            : 150,
        "attack"        : 8, // not sure of this //
        "counterattack" : 20,
        "image"       : "assets/images/jonsnow.jpg"
    },
    {
        "name"          : "Danaerys Targaryan",
        "hp"            : 180,
        "attack"        : 8, // not sure of this //
        "counterattack" : 25,
        "image"       : "assets/images/danaerys.jpg"
    }
];

var characterSelectDiv = $("#characters");

$.each(characters, function(i, character) {
    var image = "<img src='" + characters[i].image + "'>";
    characterSelectDiv.append("<div>" + character.name);
    characterSelectDiv.append(image);
    characterSelectDiv.append(character.hp + " HP" + "</div>");
});