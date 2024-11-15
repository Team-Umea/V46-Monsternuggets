let myTeam = []; 
let monsters = [
    {
        "id": 0,
        "name": "Count Dracula",
        "speciality": "Sleep, spook, drink blood, repeat",
        "image": "img.monsters/dracula.png",
        "strength": 6 
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
        "name": "Coding Monster",
        "speciality": "0001 0101 1100 0110 0011 0011 1110",
        "image": "img.monsters/nerd.png"
    },
    {
        "id": 8,
        "name": "Fire monster",
        "speciality": "Fight Fire with Fire",
        "image": "img.monsters/firemonster.png"
    },
    {
        "id": 9,
        "name": "Water monster",
        "speciality": "Singing in the rain!",
        "image": "img.monsters/watermonster.png"
    }
];

function displayMonsters() {
    const catalog = document.getElementById("monster-catalog");
    catalog.innerHTML = ""; 

    for (let i = 0; i < monsters.length; i++) {
        const monster = monsters[i];


        let alreadyInTeam = false;
        for (let j = 0; j < myTeam.length; j++) {
            if (myTeam[j].id === monster.id) {
                alreadyInTeam = true;
                break;         }
        }

        if (alreadyInTeam) {
            continue;
        }

        const monsterDiv = document.createElement("div");
        monsterDiv.classList.add("monster");

        const name = document.createElement("h2");
        name.textContent = monster.name;

        const spec = document.createElement("p");
        spec.textContent = monster.speciality;

        const image = document.createElement("img");
        image.src = monster.image;
        image.alt = monster.name;

        const addButton = document.createElement("button");
        addButton.textContent = "Add to my team";
        addButton.addEventListener("click", () => {
            addToMyTeam(monster);
        });

        monsterDiv.appendChild(image);
        monsterDiv.appendChild(name);
        monsterDiv.appendChild(spec);
        monsterDiv.appendChild(addButton);
        catalog.appendChild(monsterDiv);
    }
}



function renderTeam() {
    const teamSection = document.getElementById("my-team");
    teamSection.innerHTML = ""; 

    myTeam.forEach((monster) => {
        const teamDiv = document.createElement("div");
        teamDiv.classList.add("team-member");

        const name = document.createElement("h2");
        name.textContent = monster.name;

        const spec = document.createElement("p");
        spec.textContent = monster.speciality;

        const image = document.createElement("img");
        image.src = monster.image;
        image.alt = monster.name;

        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove from team";
        removeButton.addEventListener("click", () => {
            removeFromMyTeam(monster); 
        });

        const clearAllButton = document.createElement("button");
        clearAllButton.textContent = "Clear team";
        clearAllButton.addEventListener("click", function() {
            clearLocalStorage();
            clearTeam();
            renderTeam();
        });

        teamDiv.appendChild(image);
        teamDiv.appendChild(name);
        teamDiv.appendChild(spec);
        teamDiv.appendChild(removeButton);
        teamDiv.appendChild(clearAllButton);
        teamSection.appendChild(teamDiv); 
    });
}
function addToMyTeam(monster) {

    if (myTeam.length < 3) {
        myTeam.push(monster);
        
    } else {
        errorHandling()
        console.log(errorHandling);  
    }
    saveTeamToLocalStorage();
    renderTeam(); 
    displayMonsters()
}
function removeFromMyTeam(monster) {
    for (let i = 0; i < myTeam.length; i++) {
        if (myTeam[i].id === monster.id) {
            myTeam.splice(i, 1);
            break; 
        }
    }
    saveTeamToLocalStorage();
    renderTeam();
    displayMonsters()
}

function saveTeamToLocalStorage() {
    const teamJson = JSON.stringify(myTeam);
    localStorage.setItem("myTeam", teamJson);
}

function loadTeamFromLocalStorage() {
    const teamJson = localStorage.getItem('myTeam');
    try {
        return teamJson ? JSON.parse(teamJson) : [];
        
    } catch (error) {
        console.error("error with the storage", error)
        
    }
}

function clearLocalStorage() {
    localStorage.clear();
}

function clearTeam() {
    myTeam = [];
}
function errorHandling() {
    
    const errorMessage = document.createElement("h4");
    errorMessage.setAttribute("class","error");
    errorMessage.innerText = "Your team is full u need to clear player to add a new one";
    
    
    document.body.appendChild(errorMessage)
    setTimeout(() => {
        errorMessage.remove()
    }, 3000);
}


window.onload = () => {
    myTeam = loadTeamFromLocalStorage(); 
    displayMonsters(); 
    renderTeam(); 
};

