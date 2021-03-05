var proofCharm = [
    "00000251", "00000252", "00000253", "0000020C" //connection, nonexistence, peace, charm
];

var magic = [
    //Magic
    "00000015", "00000016", "00000017", "00000018", "00000057", "00000058"
]

function generateScore() {
    if(dataArray.length === 0) {
        document.getElementById('confirmGen').innerHTML = "Please select a seed to generate hints.";
    }
    else {
        document.getElementById("gen").classList.add("success");
        document.getElementById('gen').disabled = true;
        document.getElementById('confirmGen').innerHTML = "Hints have been generated! Refresh to play again.";
        document.getElementById('confirmShare').innerHTML = "Hints have been generated! Click Save Hints to send them to other players.";
        document.getElementById('page').disabled = true;
        document.getElementById('report').disabled = true;
        document.getElementById('abilities').disabled = true;
        document.getElementById('final').disabled = true;
        document.getElementById('Simulated Twilight Town').disabled = true;
        document.getElementById('100 Acre Wood').disabled = true;
        document.getElementById('Atlantica').disabled = true;

        // document.getElementById('proofsHinted').disabled = true;
        // document.getElementById('reportsHinted').disabled = true;

        for(var i = 1; i < 14; i++) {
            document.getElementById('report-' + i).innerHTML = "Click to reveal hint";
        }
        getLists(keyItems);
        createHintsScore(keyItems, "Score");
        saveHintSettings();

        console.log(hints);

        var seedName = dataArray[0].toString().split('');
        seed = seedName[3].concat(seedName[4], seedName[5], seedName[6]);
    }
}

//Get score of world
function worldScore(world, list) {
    var number = 0;
    for(var i = 0; i < world.length; i++) {
        if(list.includes(world[i])) {

            if(proofCharm.includes(world[i])) {
                number = number + 30;
            }
            else if(forms.includes(world[i])) {
                number = number + 25;
            }
            else if(tornPages.includes(world[i])) {
                number = number + 20
            }
            else if(magic.includes(world[i])) {
                number = number + 15;
            }
            else if(summons.includes(world[i])) {
                number = number + 10;
            }
            else if(ansemReports.includes(world[i])) {
                number = number + 5;
            }
            else if(abilities.includes(world[i])) {
                number = number + 5;
            }
        }
    }
    return number;
}

function writeScore(world, number) {
    switch(number) {
        case 0:
            var hint = world + " is a heartless choice.";
            break;
        
        default:
            var hint = world + " is worth " + number + " points.";
            break;
    }
    return hint;
}

function createHintsScore(impCheckList, build) {
    var buildName = build;

    //create list of rewards in world
    //select random code to be ID for world
    //see if proof is in world
    //add proof worlds to list
    //prioritize world if there's a proof
    //get number of important checks in world

    AW = createWorldList(AcreWood);
    var AWcode = AcreWood[Math.floor(Math.random() * 4)];
    var AWproof = getProofs(AW);
    sortProofLocations(AWproof, AW, "100 Acre Wood");
    prioritizeWorld(AWproof, "100 Acre Wood");
    var AWnumber = worldScore(AW, impCheckList);

    AT = createWorldList(Atlantica);
    var ATcode = Atlantica[Math.floor(Math.random() * 4)];
    var ATproof = getProofs(AT);
    sortProofLocations(ATproof, AT, "Atlantica");
    prioritizeWorld(ATproof, "Atlantica");
    var ATnumber = worldScore(AT, impCheckList);

    STT = createWorldList(SimulatedTwilightTown);
    var STTcode = SimulatedTwilightTown[Math.floor(Math.random() * 4)];
    var STTproof = getProofs(STT);
    sortProofLocations(STTproof, STT, "Simulated Twilight Town");
    prioritizeWorld(STTproof, "Simulated Twilight Town");
    var STTnumber = worldScore(STT, impCheckList);

    TT = createWorldList(TwilightTown);
    var TTcode = TwilightTown[Math.floor(Math.random() * 4)];
    var TTproof = getProofs(TT);
    sortProofLocations(TTproof, TT, "Twilight Town");
    prioritizeWorld(TTproof, "Twilight Town");
    var TTnumber = worldScore(TT, impCheckList);

    HB = createWorldList(HollowBastion);
    var HBcode = HollowBastion[Math.floor(Math.random() * 4)];
    var HBproof = getProofs(HB);
    sortProofLocations(HBproof, HB, "Hollow Bastion");
    prioritizeWorld(HBproof, "Hollow Bastion");
    var HBnumber = worldScore(HB, impCheckList);

    BC = createWorldList(BeastsCastle);
    var BCcode = BeastsCastle[Math.floor(Math.random() * 4)];
    var BCproof = getProofs(BC);
    sortProofLocations(BCproof, BC, "Beast's Castle");
    prioritizeWorld(BCproof, "Beast's Castle");
    var BCnumber = worldScore(BC, impCheckList);

    OC = createWorldList(OlympusColiseum);
    var OCcode = OlympusColiseum[Math.floor(Math.random() * 4)];
    var OCproof = getProofs(OC);
    sortProofLocations(OCproof, OC, "Olympus Coliseum");
    prioritizeWorld(OCproof, "Olympus Coliseum");
    var OCnumber = worldScore(OC, impCheckList);

    AG = createWorldList(Agrabah);
    var AGcode = Agrabah[Math.floor(Math.random() * 4)];
    var AGproof = getProofs(AG);
    sortProofLocations(AGproof, AG, "Agrabah");
    prioritizeWorld(AGproof, "Agrabah");
    var AGnumber = worldScore(AG, impCheckList);

    LOD = createWorldList(LandOfDragons);
    var LODcode = LandOfDragons[Math.floor(Math.random() * 4)];
    var LODproof = getProofs(LOD);
    sortProofLocations(LODproof, LOD, "Land of Dragons");
    prioritizeWorld(LODproof, "Land of Dragons");
    var LODnumber = worldScore(LOD, impCheckList);

    PL = createWorldList(PrideLands);
    var PLcode = PrideLands[Math.floor(Math.random() * 4)];
    var PLproof = getProofs(PL);
    sortProofLocations(PLproof, PL, "Pride Lands");
    prioritizeWorld(PLproof, "Pride Lands");
    var PLnumber = worldScore(PL, impCheckList);

    DC = createWorldList(DisneyCastle);
    var DCcode = DisneyCastle[Math.floor(Math.random() * 4)];
    var DCproof = getProofs(DC);
    sortProofLocations(DCproof, DC, "Disney Castle");
    prioritizeWorld(DCproof, "Disney Castle");
    var DCnumber = worldScore(DC, impCheckList);

    HT = createWorldList(HalloweenTown);
    var HTcode = HalloweenTown[Math.floor(Math.random() * 4)];
    var HTproof = getProofs(HT);
    sortProofLocations(HTproof, HT, "Halloween Town");
    prioritizeWorld(HTproof, "Halloween Town");
    var HTnumber = worldScore(HT, impCheckList);

    PR = createWorldList(PortRoyal);
    var PRcode = PortRoyal[Math.floor(Math.random() * 4)];
    var PRproof = getProofs(PR);
    sortProofLocations(PRproof, PR, "Port Royal");
    prioritizeWorld(PRproof, "Port Royal");
    var PRnumber = worldScore(PR, impCheckList);

    SP = createWorldList(SpaceParanoids);
    var SPcode = SpaceParanoids[Math.floor(Math.random() * 4)];
    var SPproof = getProofs(SP);
    sortProofLocations(SPproof, SP, "Space Paranoids");
    prioritizeWorld(SPproof, "Space Paranoids");
    var SPnumber = worldScore(SP, impCheckList);

    TWTNW = createWorldList(TheWorldThatNeverWas);
    var TWTNWcode = TheWorldThatNeverWas[Math.floor(Math.random() * 4)];
    var TWTNWproof = getProofs(TWTNW);
    sortProofLocations(TWTNWproof, TWTNW, "The World That Never Was");
    prioritizeWorld(TWTNWproof, "The World That Never Was");
    var TWTNWnumber = worldScore(TWTNW, impCheckList);

    DF = createWorldList(Forms);
    var DFcode = Forms[Math.floor(Math.random() * 4)];
    var DFproof = getProofs(DF);
    sortProofLocations(DFproof, DF, "Drive Forms");
    prioritizeWorld(DFproof, "Drive Forms");
    var DFnumber = worldScore(DF, impCheckList);

    LU = createWorldList(Levels);
    var LUcode = Levels[Math.floor(Math.random() * 4)];
    var LUproof = getProofs(LU);
    sortProofLocations(LUproof, LU, "Sora's Heart");
    prioritizeWorld(LUproof, "Sora's Heart");
    var LUnumber = worldScore(LU, impCheckList);

    var Fcode = Free[Math.floor(Math.random() * 4)];

    if(DFproof) {
        prioritizeForms();
    }

    if(AWproof) {
        prioritizePages();
    }

    if(ATproof) {
        prioritizeAtlantica();
    }
    
    var worldChecks = {
        "100 Acre Wood" : AWnumber,
        "Atlantica" : ATnumber,
        "Simulated Twilight Town" : STTnumber, 
        "Twilight Town" : TTnumber, 
        "Hollow Bastion" : HBnumber,
        "Beast's Castle" : BCnumber, 
        "Olympus Coliseum" : OCnumber,
        "Agrabah" : AGnumber, 
        "Land of Dragons" : LODnumber,
        "Pride Lands" : PLnumber,
        "Disney Castle" : DCnumber,
        "Halloween Town" : HTnumber,
        "Port Royal" : PRnumber,
        "Space Paranoids" : SPnumber,
        "The World That Never Was" : TWTNWnumber,
        "Drive Forms" : DFnumber,
        "Sora's Heart" : LUnumber
    }

    Object.keys(worldChecks).forEach(function(key) {
        console.log(key + ": " + worldChecks[key]);
    });

    var codeChecks = {
        "100 Acre Wood" : AWcode,
        "Atlantica" : ATcode,
        "Simulated Twilight Town" : STTcode, 
        "Twilight Town" : TTcode, 
        "Hollow Bastion" : HBcode,
        "Beast's Castle" : BCcode, 
        "Olympus Coliseum" : OCcode,
        "Agrabah" : AGcode, 
        "Land of Dragons" : LODcode,
        "Pride Lands" : PLcode,
        "Disney Castle" : DCcode,
        "Halloween Town" : HTcode,
        "Port Royal" : PRcode,
        "Space Paranoids" : SPcode,
        "The World That Never Was" : TWTNWcode,
        "Drive Forms" : DFcode,
        "Sora's Heart" : LUcode,
        "Free" : Fcode
    }

    shuffallworlds = shuffle(allworlds);

    var worlds = priorityWorlds.concat(shuffallworlds);
    var selectedworlds = [];
    for(var k = 0; k < 13; k++) {
        selectedworlds.push(worlds[k]);
    }

    selectedworlds = shuffle(selectedworlds);

    //get report locations
    for(var j = 0; j < ansemReports.length; j++) {
        var reportPlacement = findLocation(ansemReports[j]);
        if(reportPlacement === undefined) {
            reportPlacement = vanillaReports[j];
        }
        reportLocations.push(reportPlacement);
    }

    console.log(buildName);
    //check for connection hint locked on terra or peace hint locked on shroom
    if(buildName === "Original") {
        selectedworlds = checkTerraShroomReportsSelfHint(selectedworlds);
    }
    else {
        selectedworlds = checkTerraShroomReports(selectedworlds);
    }

    //check that reports pointing to proofs are hinted
    selectedworlds = hintProofReports(selectedworlds);

    // if(document.getElementById('reportsHinted').checked) {
    //     selectedworlds = hintProofReports(selectedworlds);
    // }

    if(high) {
        for(var i = 0; i < 13; i++) {
            hints.push(writeScore(selectedworlds[i], 0));
        }
    }
    else {
        for(var i = 0; i < 13; i++) {
            hints.push(writeScore(selectedworlds[i], worldChecks[selectedworlds[i]]));
            savedhints.push(codeChecks[selectedworlds[i]] + "," + (worldChecks[selectedworlds[i]] + 32) + ".");
        }
    }

    //Write saved hints files
    savedhints.push("\n");
    for(var i = 0; i < 13; i++) {
        savedhints.push(codeChecks[reportLocations[i]] + ".");
    }
}

function uploadHintsScore(button) {
    var row = dataArray[0].toString().split('.');
    row.pop();
    for(var i = 0; i < row.length; i++) {
        var index = row[i].toString().split(',');
        var code = index[0];
        var number = parseInt(index[1]) - 32;
        for(var j = 0; j < alllists.length; j++) {
            if(alllists[j].includes(code)) {
                var world = worlds[j];
            }
        }
        hints.push(writeScore(world, number));
    }

    var row2 = dataArray[1].toString().split('.');
    for(var i = 0; i < row2.length; i++) {
        var index = row2[i].toString().split(',');
        var code = index[0];
        for(var j = 0; j < alllists.length; j++) {
            if(alllists[j].includes(code)) {
                var world = worlds[j];
                reportLocations.push(world);
            }
        }
    }

    if(document.getElementById(button).id === "custom-upload-btn") {
        document.getElementById("custom-upload-btn").classList.add("success");
        document.getElementById('custom-upload-btn').disabled = true;
        document.getElementById('confirmShare').innerHTML = "Hints have been uploaded! Refresh to play again.";
        document.getElementById('confirmGen').innerHTML = "Hints have been uploaded! Refresh to play again.";
    }
    else {
        document.getElementById("upload-btn").classList.add("success");
        document.getElementById('upload-btn').disabled = true;
        document.getElementById('gen').disabled = true;
        document.getElementById('confirmShare').innerHTML = "Hints have been uploaded! Refresh to play again.";
        document.getElementById('confirmGen').innerHTML = "Hints have been uploaded! Refresh to play again.";
        document.getElementById('page').disabled = true;
        document.getElementById('report').disabled = true;
        document.getElementById('abilities').disabled = true;
        document.getElementById('final').disabled = true;
        document.getElementById("Sora's Heart").disabled = true;
        document.getElementById('Simulated Twilight Town').disabled = true;
        document.getElementById('100 Acre Wood').disabled = true;
        document.getElementById('Atlantica').disabled = true;

        // document.getElementById('proofsHinted').disabled = true;
        // document.getElementById('reportsHinted').disabled = true;
    }

    for(var i = 1; i < 14; i++) {
        document.getElementById('report-' + i).innerHTML = "Click to reveal hint";
    }

    document.getElementById("hintSettings").innerHTML = dataArray[2].toString();
}