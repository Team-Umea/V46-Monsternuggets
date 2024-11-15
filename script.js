const monsters = [

    {
        "id": 0,
        "name": "Count Dracula",
        "speciality": "Sleep, spook, drink blood, repeat",
        "image": "img.monsters/dracula.png",
        "strenght": 6
        },
        {
        "id": 1,
        "name": "Fast Frankenstein's Monster",
        "speciality": "Runs faster than you think",
        "image": "img.monsters/frankenstein.png"
        },
        {
        "id": 2,
        "name": "Ghost",
        "speciality": "Rattle some chains",
        "image": "img.monsters/ghost.png"
        },
        {
        "id": 3,
        "name": "Jason",
        "speciality": "What doesn't this psychopath do",
        "image": "img.monsters/Jason.png"
        },
        {
        "id": 4,
        "name": "The Hulk",
        "speciality": "Possesses the capacity for essentially limitless physical strength",
        "image": "img.monsters/theHulk.png"
        },
        {
        "id": 5,
        "name": "Scarecrow",
        "speciality": "If you have trouble with crows on your crops",
        "image": "img.monsters/scarecrow.png"
        },
        {
        "id": 6,
        "name": "Troll",
        "speciality": "A gentle soul who wants to be your ally (read friend)",
        "image": "img.monsters/troll.png"
        },
        {
        "id": 7,
        "name": "Witch",
        "speciality": "She's mostly into animals and love potions.",
        "image": "img.monsters/witch.png"
        },
        {
            "id": 8,
            "name": "Coding Monster",
            "speciality": "0001 0101 1100 0110 0011 0011 1110",
            "image": "img.monsters/nerd.png"
        },
        {
            "id": 9,
            "name": "Fire monster",
            "speciality": "Fight Fire with Fire",
            "image": "img.monsters/firemonster.png"
        },
        {
            "id": 10,
            "name": "Water monster",
            "speciality": "Singing in the rain!",
            "image": "img.monsters/watermonster.png"
        }
];


function displayMonsters() {
    const catalog = document.getElementById("monster-catalog");
    catalog.innerHTML = ""; 

    monsters.forEach(monster => {
        const monsterDiv = document.createElement("div");
        monsterDiv.classList.add("monster");

        monsterDiv.innerHTML = `
            <img src="${monster.image}" alt="${monster.name}">
            <h3>${monster.name}</h3>
            <p>${monster.speciality}</p>
            <p>Strenght: ${monster.strenght}<p>
            <button onclick="addToTeam(${monster.id})">Add to my team</button>
        `;

        catalog.appendChild(monsterDiv);
    });
}


window.onload = displayMonsters;