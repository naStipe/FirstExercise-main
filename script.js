description = document.getElementById("description")
document.getElementById("actionButton").addEventListener("click", function() {
    description.style.visibility='visible';
    alert("Button clicked!");
});

document.getElementById("year").innerHTML = new Date().getFullYear().toString();


