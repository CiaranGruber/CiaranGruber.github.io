function dropNavClick() {
    "use strict";
    var navigation = document.getElementById("top-nav");

    if (navigation.className === "navigation") {
        navigation.className = "navigation responsive";
    } else {
        navigation.className = "navigation";
    }
}

window.onload = function () {
    "use strict";
    document.getElementById("top-nav").addEventListener("click", dropNavClick);
};