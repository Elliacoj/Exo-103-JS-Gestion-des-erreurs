let result = document.getElementById("containerr");

try {
    result.innerHTML = "Bonjour";
}

catch (e) {
    alert("L'élement " + e.message + " n'existe pas!");
}