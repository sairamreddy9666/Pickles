function checkFlavor() {
    const flavor = document.getElementById("pickle-flavor").value;
    const result = document.getElementById("result");

    if (flavor === "dill") {
        result.textContent = "Correct! Dill pickles are the best!";
        result.style.color = "green";
    } else if (flavor === "sweet") {
        result.textContent = "Sweet pickles are delicious too!";
        result.style.color = "orange";
    } else if (flavor === "spicy") {
        result.textContent = "Spicy pickles are for the brave!";
        result.style.color = "red";
    } else {
        result.textContent = "Please select a flavor!";
        result.style.color = "black";
    }
}
