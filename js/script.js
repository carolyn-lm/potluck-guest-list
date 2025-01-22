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
// assign button (visible after guest list is full)
const assignButton = document.querySelector(".assign");
// assigned items list
const assignedItems = document.querySelector(".assigned-items");

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

//assign random items to each guest
const assignItems = function () {
    //items to assign
    const potluckItems = ["Potato Salad", "Chips", "Salad", "Hummus", "Cookies", "Fruit", "Pasta salad", "Sandwiches", "Brownies", "lemonade", "coleslaw", "guacamole", "tacos"];
    //list of all guests
    const allGuests = document.querySelectorAll(".guest-list li");
    //for each guest
    for (let guest of allGuests) {
        //pick random item
        let randomPotluckIndex = Math.floor(Math.random() * potluckItems.length);
        let randomPotluckItem = potluckItems[randomPotluckIndex];
        //create assignment list item and add to assignedItems list
        let listItem = document.createElement("li");
        listItem.innerText = `${guest.innerText} is bringing ${randomPotluckItem}`;
        assignedItems.append(listItem);
        //remove assigned item from list
        potluckItems.splice(randomPotluckIndex, 1);
    }
}

//event listener for Assign items button
assignButton.addEventListener("click", function () {
    assignItems();
    //disable button so assign can only be run once
    assignButton.disabled = true;
});