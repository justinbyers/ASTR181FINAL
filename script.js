function hideCurrentInfo() {
    // document.getElementById("descBox").innerText = "";
    document.getElementById("home_Info").setAttribute("style", "visibility:hidden;");
    document.getElementById("event1_Info").setAttribute("style", "visibility:hidden;");
    document.getElementById("event2_Info").setAttribute("style", "visibility:hidden;");
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