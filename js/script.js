$(document).ready(function () {
    var weapons = [{
            "name": "44_Pistol",
            "damange": 48,
            "Fire_Rate": 6,
            "range": 119,
            "accuracy": 66,
            "weight": 4.2,
            "value": 99
        },
        {
            "name": "10mm_Pistol",
            "damange": 18,
            "Fire_Rate": 46,
            "range": 119,
            "accuracy": 61,
            "weight": 4.2,
            "value": 53
        },
        {
            "name": "Assault_Rifle",
            "damange": 30,
            "Fire_Rate": 40,
            "range": 119,
            "accuracy": 72,
            "weight": 13.1,
            "value": 144
        }
    ];

    $(".listW").on("mouseenter", function (e) {
        var itemn = $(e.currentTarget).attr("id");
        for (item in weapons) {
            if (weapons[item].name === itemn) {
                $("#damage")[0].innerText = weapons[item].damange;
                $("#firerate")[0].innerText = weapons[item].Fire_Rate;
                $("#accu")[0].innerText = weapons[item].accuracy;
                $("#val")[0].innerText = weapons[item].value;
                $("#weg")[0].innerText = weapons[item].weight;
                $("#range")[0].innerText = weapons[item].range;
                
                console.log($("#damage").text)
            }
        }
    })
});