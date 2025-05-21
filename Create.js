var NI = document.getElementById("N");
var SDI = document.getElementById("SD");
var EDI = document.getElementById("ED");
var NPI = document.getElementById("NP");
var Yes = document.getElementById("Yes");
var No = document.getElementById("No");
var O = document.getElementById("O");

var N
var SD
var ED
var NP
var TLS
var TL
var PL
var P = [];
var PNS = [];
var CD
var PN
var Yes_No

var Submit = document.getElementById("Submit");

Submit.onclick = function(){
    N = NI.value;
    SD = new Date(SDI.value);
    ED = new Date(EDI.value);
    NP = NPI.value;
    TLS = ED.getTime() - SD.getTime();
    TL = Math.round(TLS / (1000 * 3600 * 24));
    PL = Math.floor(TL/NP);
    CD = SD;

    if(Yes.checked){Yes_No = true}
    else{Yes_No = false}

    
    if(Yes_No){
        var checks = [];
        for (i = 0; i < NP; i++) {
            PN = prompt("Please enter the title of part " + (i+1));
            PNS[i] = PN;
            var T = new Date(SD.setDate(SD.getDate() + PL)).toString();
            if (T.includes("00:00:00 GMT+0000 (Greenwich Mean Time)")){
                P[i] = T.replace("00:00:00 GMT+0000 (Greenwich Mean Time)", "</br>");
            }
            else {
                P[i] = T.replace("00:00:00 GMT+0100 (British Summer Time)", "</br>");
            }
            O.innerHTML += String(PNS[i]) + "</br>" + P[i];
            CD = P[i];
            checks[i] = false;
        }
        chrome.storage.sync.set ({
            [N]: {
                Title: N,
                Dates: P,
                Completed: checks,
                Names: PNS
            }
        }, function(){alert("Time line saved")});    
    }
    else{
        var checks = [];
        for (i = 0; i < NP; i++) {
            var T = new Date(SD.setDate(SD.getDate() + PL)).toString();
            if (T.includes("00:00:00 GMT+0000 (Greenwich Mean Time)")){
                P[i] = T.replace("00:00:00 GMT+0000 (Greenwich Mean Time)", "</br>");
            }
            else {
                P[i] = T.replace("00:00:00 GMT+0100 (British Summer Time)", "</br>");
            }
            O.innerHTML += "Part " + String(i+1) + "</br>" + P[i];
            CD = P[i];
            checks[i] = false;
        }  
        chrome.storage.sync.set({
            [N]: {
                Title: N,
                Dates: P,
                Completed: checks
            }
        }, function(){alert("Time line saved")});
    }

}


