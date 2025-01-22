// invite button
const addGuestButton = document.querySelector(".invite");
// label for the invite button
const guestInputLabel = document.querySelector(".add-guest label");
// text input box
const guestInput = document.querySelector(".add-guest input");
// unordered list (not yet visible)
const guestList = document.querySelector(".guest-list");
// span class for number of guests attending
const guestCount = document.querySelector(".attendance");
// alert when guest list is full (not yet visible)
const guestFull = document.querySelector(".alert");

//Event listener for Add Guest button
addGuestButton.addEventListener("click", function () {
    const guest = guestInput.value;
    if (guest !== "") {
        addToList(guest);
        clearInput();
        updateGuestCount();
    }
    // console.log(guest);
});

//Clear value of input
const clearInput = function () {
    guestInput.value = "";
}

//Add name to guest list
const addToList = function (guest) {
    const listItem = document.createElement("li");
    listItem.innerText = guest;
    guestList.append(listItem);
}

//Update displayed guest count and check if list is full (only 8 guests allowed)
const updateGuestCount = function () {
    const guests = document.querySelectorAll(".guest-list li");
    guestCount.innerText = guests.length;
    if (guests.length === 8) {
        //guest list full, hide button, input and label
        addGuestButton.classList.add("hide");
        guestInput.classList.add("hide");
        guestInputLabel.classList.add("hide");
        //display alert (full message and assign button)
        guestFull.classList.remove("hide");
    }
}