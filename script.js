// Assignment 1: Blacksmith — The Tiny Forge

// PLAN: Write a short pseudocode plan for making a sword here.

/*
1. Check if the forge heat is at least 30
2. If it is, subtract 30 from the forge heat and increase the sword count by 1
3. If it is not, display a message that there is not enough heat to make a sword
4. Update the forge status and display the current heat and sword count
*/

// 1. Select the forge, heat, sword count, status, image, and message elements.
//    Find their IDs in index.html.

const forgeElement = document.getElementById('forge');
const heatElement = document.getElementById('heat-value');
const swordCountElement = document.getElementById('sword-count');
const statusElement = document.getElementById('forge-status');
const forgeImageElement = document.getElementById('forge-image');
const actionMessageElement = document.getElementById('action-message');
// A2 Interactive Consts
const heatInputElement = document.getElementById('qty');
const makeSwordButton = document.getElementById('make-sword');
const resetForgeButton = document.getElementById('reset-forge');

// 2. Create the two state variables: heat and swords made.

let heat = 20;
let swordsMade = 0;

// 3. Write getForgeStatus(heatValue). Return the correct status string.

function getForgeStatus(heatValue) {
    if (heatValue < 30) {
        return 'Too cold';
    } else if (heatValue < 70) {
        return 'Ready to forge';
    } else {
        return 'Roaring fire';
    }
}

// 4. Write updateForge(). Update text and apply one status class.
//    Change the supplied forge image src and alt to match the heat.
//    Keep the most recent action message visible.

function updateForge() {
    // Update the heat and sword count text
    heatElement.textContent = heat;
    swordCountElement.textContent = swordsMade;

    const status = getForgeStatus(heat);
    statusElement.textContent = status;

    forgeElement.classList.remove('is-cold', 'is-warm', 'is-hot');

    if (status === 'Too cold') {
        forgeElement.classList.add('is-cold');
        forgeImageElement.src = 'assets/forge-cold.svg';
        forgeImageElement.alt = 'A stone forge with dark coals and no flames';
    } else if (status === 'Ready to forge') {
        forgeElement.classList.add('is-warm');
        forgeImageElement.src = 'assets/forge-ready.svg';
        forgeImageElement.alt = 'A stone forge with a small orange fire';
    } else {
        forgeElement.classList.add('is-roaring');
        forgeImageElement.src = 'assets/forge-roaring.svg';
        forgeImageElement.alt = 'A stone forge with tall bright flames and sparks';
    }

}
// 5. Write resetForge(). Restore the state, message, and display.

function resetForge() {
    heat = 20;
    swordsMade = 0;
    heatInputElement.value = '20';
    actionMessageElement.textContent = 'Forge reset. Ready to make swords!';
    updateForge();
}

// 6. Write heatForge(amount). Add heat, cap it, and update the page.

function heatForge(amount) {
    heat += amount;
    if (heat > 100) {
        heat = 100;
    }
    actionMessageElement.textContent = `Added ${amount} heat to the forge.`;
    updateForge();
}

// 7. Write makeSword(). Handle both success and insufficient heat.

function makeSword() {
    if (heat >= 30) {
        heat -= 30;
        swordsMade += 1;
        actionMessageElement.textContent = 'Sword made successfully!';
    } else {
        actionMessageElement.textContent = 'Not enough heat to make a sword.';
    }
    updateForge();
}


// Use the tests in ASSIGNMENT.md to check your work.

// A2 Interactive Blacksmith code

// 8. Connect the add heat button to its click event. Use an event listener.
addHeatButton.addEventListener('click', function () {
    const heatToAdd = Number(heatInputElement.value);
    // check for empty input or non whole number

    if (
        heatInputElement.value === '' ||
        !Number.isFinite(heatToAdd) ||
        !Number.isInteger(heatToAdd) ||
        heatToAdd <= 0
    ) {
        actionMessageElement.textContent = 'Please enter a valid positive number for heat.';
        return;
    } else {
        heatForge(heatToAdd);
    }
});

// 9. Connect makeSword() to the "Make Sword" button. Use an event listener.
makeSwordButton.addEventListener('click', function () {
    makeSword();
});

// 10. Connect resetForge() to the "Reset Forge" button. Use an event listener.
resetForgeButton.addEventListener('click', function () {
    resetForge();
});

// 11. Call resetForge() once to start the game.

resetForge();



