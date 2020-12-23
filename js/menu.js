var proofsCheck = {name: "Proofs", value: 3, code: ""};

var valor = {name: "Valor Form", value: 1, code: ""};
var wisdom = {name: "Wisdom Form", value: 1, code: ""};
var limit = {name: "Limit Form", value: 1, code: ""};
var master = {name: "Master Form", value: 1, code: ""};
var final = {name: "Final Form", value: 1, code: ""};

var pagesCheck = {name: "Torn Pages", value: 5, code: ""};

var fire = {name: "Fire", value: 3, code: ""};
var blizzard = {name: "Blizzard", value: 3, code: ""};
var thunder = {name: "Thunder", value: 3, code: ""};
var cure = {name: "Cure", value: 3, code: ""};
var reflect = {name: "Reflect", value: 3, code: ""};
var magnet = {name: "Magnet", value: 3, code: ""};

var baseball = {name: "Chicken Little", value: 1, code: ""};
var lamp = {name: "Genie", value: 1, code: ""};
var ukulele = {name: "Stitch", value: 1, code: ""};
var feather = {name: "Peter Pan", value: 1, code: ""};

var reportsCheck = {name: "Ansem Reports", value: 13, code: ""};

var importantChecks;
function startMenu() {
    importantChecks = 48;
    document.getElementById('total').innerHTML = importantChecks;
}

$(function()
    {
        if(importantChecks === 50) {
            return;
        }
        else {
            $("#b1").click(function()
            {
                $("#listbox1 option:selected").each(function()
                    {
                        $(this).remove().appendTo("#listbox2");
                    }
                );
            }
        );

            $("#b2").click(function()
                {
                    $("#listbox2 option:selected").each(function()
                        {
                            $(this).remove().appendTo("#listbox1");
                        }
                    );
                }
            );
        }
    }
);