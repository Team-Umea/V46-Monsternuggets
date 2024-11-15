
const myTeam = [];
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
        "name": "Witch",
        "speciality": "She's mostly into animals and love potions.",
        "image": "img.monsters/witch.png"
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

    monsters.forEach((monster) => {
        const monsterDiv = document.createElement("div");
        monsterDiv.classList.add("monster");

        const monsterName = document.createElement("h2");
        monsterName.textContent = monster.name;

        const monsterSpec = document.createElement("p");
        monsterSpec.textContent = monster.speciality;


        const monsterImage = document.createElement("img");
        monsterImage.src = monster.image;
        monsterImage.alt = monster.name;

        const addButton = document.createElement("button");
        addButton.textContent = "Add to my team";
        addButton.addEventListener("click", () => {
        saveTeamToLocalStorage();
        addTeam();
        console.log(myTeam);
        console.log(teamJson);
        
        });
        


        monsterDiv.appendChild(monsterImage);
        monsterDiv.appendChild(monsterName);
        monsterDiv.appendChild(monsterSpec);
        monsterDiv.appendChild(addButton);
        catalog.appendChild(monsterDiv);

        function addTeam(params) {
    monsterDiv.style.backgroundColor = "green"
    myTeam.push(monster)
  
    


      
        }
        function deleteTeamAll(params) {
    
        }    
    });
   
}

// const newMonster=document.querySelectorAll(".monster")

window.onload = displayMonsters;


function saveTeamToLocalStorage() {
    const teamJson = JSON.stringify(myTeam);
    localStorage.setItem("myTeam", teamJson)
}

function loadTeamFromLocalStorage () {
        const teamJson = localStorage.getItem('myTeam');
        return teamJson ? JSON.parse(teamJson) : [];
    }

function clearLocalStorage(params) {
    localStorage.clear()
}



function deleteTeamMember(params) {

    
}

