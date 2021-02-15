var checklist = [];
var importantChecks;

function startMenu() {
    alllists.push(AcreWood, SimulatedTwilightTown, TwilightTown, HollowBastion, BeastsCastle, 
        OlympusColiseum, Agrabah, LandOfDragons, PrideLands, DisneyCastle, 
        HalloweenTown, PortRoyal, SpaceParanoids, TheWorldThatNeverWas, Forms, Levels, Atlantica, Free);

    lists.push(AcreWood, SimulatedTwilightTown, TwilightTown, HollowBastion, BeastsCastle, 
        OlympusColiseum, Agrabah, LandOfDragons, PrideLands, DisneyCastle, 
        HalloweenTown, PortRoyal, SpaceParanoids, TheWorldThatNeverWas, Forms, Levels);

    var creatinglists = {
        "100 Acre Wood": AcreWood,
        "Simulated Twilight Town" : SimulatedTwilightTown,
        "Twilight Town" : TwilightTown,
        "Hollow Bastion" : HollowBastion,
        "Beast's Castle" : BeastsCastle,
        "Olympus Coliseum" : OlympusColiseum,
        "Agrabah" : Agrabah,
        "Land of Dragons" : LandOfDragons,
        "Pride Lands" : PrideLands,
        "Disney Castle" : DisneyCastle,
        "Halloween Town" : HalloweenTown,
        "Port Royal" : PortRoyal,
        "Space Paranoids" : SpaceParanoids,
        "The World That Never Was" : TheWorldThatNeverWas,
        "Drive Forms" : Forms,
        "Sora's Heart" : Levels,
        "Atlantica" : Atlantica,
        "Free" : Free
    }

    worlds = Object.keys(creatinglists);

    worldAndList = creatinglists;

    importantChecks = 48;
    document.getElementById('total').innerHTML = importantChecks;

    checklist.push(
        proof,
        valor,
        wisdom,
        limit,
        master,
        final,
        pages,
        fire,
        blizzard,
        thunder,
        cure,
        reflect,
        magnet,
        baseball,
        lamp,
        ukulele,
        feather,
        reports,
        promise,
        secondChance,
        onceMore,
        scan,
        aerialRecovery,
        comboMaster,
        finishingPlus,
        negativeCombo,
        berserkCharge,
        experienceBoost,
        lightAndDarkness,
        guard,
        horizontalSlash,
        finishingLeap,
        slideDash,
        guardBreak,
        explosion,
        magnetBurst,
        trinity,
        highJump,
        quickRun,
        dodgeRoll,
        aerialDodge,
        glide,
        munnyPouch,
        membershipCard);

    console.log(checklist);
}

//Listboxes
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

                        console.log(this.value);

                        for(var i = 0; i < checklist.length; i++) {
                            if(checklist[i].name === this.value) {
                                var number = checklist[i].value;
                                console.log(number);
                            }
                        }
                        importantChecks = importantChecks + number;
                        document.getElementById('total').innerHTML = importantChecks;
                    }
                );
            }
        );

            $("#b2").click(function()
                {
                    $("#listbox2 option:selected").each(function()
                        {
                            $(this).remove().appendTo("#listbox1");
                            
                            console.log(this.value);

                            for(var i = 0; i < checklist.length; i++) {
                                if(checklist[i].name === this.value) {
                                    var number = checklist[i].value;
                                    console.log(number);
                                }
                            }
                            importantChecks = importantChecks - number;
                            document.getElementById('total').innerHTML = importantChecks;
                        }
                    );
                }
            );
        }
    }
);

var customKeyItems = [];
//Generate custom pool of hints
function generateCustom() {
    var selectedImportChecks = document.getElementById('listbox2');

    if(dataArray.length === 0) {
        document.getElementById('confirmGen').innerHTML = "Please select a seed to generate hints.";
    }

    else if(importantChecks < 45) {
        alert("There must be at least 45 total important checks.");
    }
    else {
        for(var i = 0; i < selectedImportChecks.options.length; i++) {
            var itemName = selectedImportChecks.options[i].value;
    
            for(var j = 0; j < checklist.length; j++) {
                if(checklist[j].name === itemName) {
                    var itemCode = checklist[j].code;

                    switch(itemName) {
                        case "Proofs":
                        case "Ansem Reports":
                        case "High Jump":
                        case "Quick Run":
                        case "Dodge Roll":
                        case "Aerial Dodge":
                        case "Glide":
                        case "Munny Pouch":
                            for(var k = 0; k < itemCode.length; k++) {
                                customKeyItems.push(itemCode[k]);
                            }
                            break;
                        
                        default:
                            customKeyItems.push(itemCode);
                    }
                    
                }
            }
            
        }
        document.getElementById("genCustom").classList.add("success");
        document.getElementById('genCustom').disabled = true;
        document.getElementById('confirmGen').innerHTML = "Hints have been generated! Refresh to play again.";
        document.getElementById('confirmShare').innerHTML = "Hints have been generated! Click Save Hints to send them to other players.";

        for(var i = 1; i < 14; i++) {
            document.getElementById('report-' + i).innerHTML = "Click to reveal hint";
        }

        getLists();
        createHints(customKeyItems, "Custom");
        var seedName = dataArray[0].toString().split('');
        seed = seedName[3].concat(seedName[4], seedName[5], seedName[6]);

        for(var i = 0; i < selectedImportChecks.options.length; i++) {
            savedhints.push(selectedImportChecks.options[i].value + " - ");
        }
        
        console.log(customKeyItems);
    }

    
}