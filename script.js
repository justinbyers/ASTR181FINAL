function hideCurrentInfo() {
    // document.getElementById("descBox").innerText = "";
    document.getElementById("home_Info").setAttribute("style", "visibility:hidden;");
    document.getElementById("event1_Info").setAttribute("style", "visibility:hidden;");
    document.getElementById("event2_Info").setAttribute("style", "visibility:hidden;");
    document.getElementById("event3_Info").setAttribute("style", "visibility:hidden;");
    document.getElementById("event4_Info").setAttribute("style", "visibility:hidden;");
    document.getElementById("event5_Info").setAttribute("style", "visibility:hidden;");
    document.getElementById("event6_Info").setAttribute("style", "visibility:hidden;");
    document.getElementById("credits_Info").setAttribute("style", "visibility:hidden;");
    
}
function showHome() {
    hideCurrentInfo();
    document.getElementById("home_Info").setAttribute("style", "visibility:visible;");
}
function showEvent1() {
    hideCurrentInfo();
    document.getElementById("event1_Info").setAttribute("style", "visibility:visible;");
}
function showEvent2() {
    hideCurrentInfo();
    document.getElementById("event2_Info").setAttribute("style", "visibility:visible;");
}
function showEvent3() {
    hideCurrentInfo();
    document.getElementById("event3_Info").setAttribute("style", "visibility:visible;");
}
function showEvent4() {
    hideCurrentInfo();
    document.getElementById("event4_Info").setAttribute("style", "visibility:visible;");
}
function showEvent5() {
    hideCurrentInfo();
    document.getElementById("event5_Info").setAttribute("style", "visibility:visible;");
}
function showEvent6() {
    hideCurrentInfo();
    document.getElementById("event6_Info").setAttribute("style", "visibility:visible;");
}
function showCredits() {
    hideCurrentInfo();
    document.getElementById("credits_Info").setAttribute("style", "visibility:visible;");
}