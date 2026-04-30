const containers = document.querySelectorAll(".cards-container");

function addTask() {
    const input = document.getElementById("taskInput");
    const text = input.value.trim();
    if (text === "") return;

    const newCard = document.createElement("div");
    newCard.classList.add("card");
    newCard.draggable = true;
    newCard.innerText = text;

    newCard.addEventListener("dragstart", () => {
        newCard.classList.add("dragging");
    });

    newCard.addEventListener("dragend", () => {
        newCard.classList.remove("dragging");
    });

    document.getElementById("todo").appendChild(newCard);
    input.value = "";
}

containers.forEach((container) => {
    container.addEventListener("dragover", (e) => {
        e.preventDefault(); 

        const draggingCard = document.querySelector(".dragging");
        if (draggingCard) {
            container.appendChild(draggingCard);
        }
    });
});