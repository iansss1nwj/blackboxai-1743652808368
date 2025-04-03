// Game Data
const CHARACTERS = [
    {
        id: "mark",
        name: "Mark",
        image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
        traits: ["Leader", "Protective", "Mysterious"],
        costumes: {
            "default": "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
            "formal": "https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg",
            "casual": "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
        }
    },
    {
        id: "renjun",
        name: "Renjun",
        image: "https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg",
        traits: ["Artistic", "Gentle", "Dreamer"],
        costumes: {
            "default": "https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg",
            "formal": "https://images.pexels.com/photos/1183260/pexels-photo-1183260.jpeg",
            "casual": "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg"
        }
    },
    {
        id: "jaemin",
        name: "Jaemin",
        image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg",
        traits: ["Charming", "Playful", "Confident"],
        costumes: {
            "default": "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg",
            "formal": "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg",
            "casual": "https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg"
        }
    },
    {
        id: "haechan",
        name: "Haechan",
        image: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg",
        traits: ["Energetic", "Funny", "Passionate"],
        costumes: {
            "default": "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg",
            "formal": "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg",
            "casual": "https://images.pexels.com/photos/936119/pexels-photo-936119.jpeg"
        }
    },
    {
        id: "jeno",
        name: "Jeno",
        image: "https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg",
        traits: ["Loyal", "Strong", "Quiet"],
        costumes: {
            "default": "https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg",
            "formal": "https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg",
            "casual": "https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg"
        }
    },
    {
        id: "jisung",
        name: "Jisung",
        image: "https://images.pexels.com/photos/1898555/pexels-photo-1898555.jpeg",
        traits: ["Young", "Energetic", "Innocent"],
        costumes: {
            "default": "https://images.pexels.com/photos/1898555/pexels-photo-1898555.jpeg",
            "formal": "https://images.pexels.com/photos/1898555/pexels-photo-1898555.jpeg",
            "casual": "https://images.pexels.com/photos/1898555/pexels-photo-1898555.jpeg"
        }
    }
];

const SCENES = [
    {
        id: 1,
        text: "You find yourself in the mystical city of Eclipsia, where the balance between light and shadow is maintained by six powerful guardians. As the newest recruit to their order, you must choose who to bond with...",
        choices: [
            {
                text: "Approach Mark, the stoic leader",
                nextScene: 2,
                blEffect: 5,
                scEffect: 0,
                requiredCharacter: "mark"
            },
            {
                text: "Seek out Renjun, the artistic dreamer",
                nextScene: 3,
                blEffect: 5,
                scEffect: 0,
                requiredCharacter: "renjun"
            },
            {
                text: "Find Jaemin, the charming trickster",
                nextScene: 4,
                blEffect: 5,
                scEffect: 0,
                requiredCharacter: "jaemin"
            },
            {
                text: "Look for Haechan, the fiery performer",
                nextScene: 5,
                blEffect: 5,
                scEffect: 0,
                requiredCharacter: "haechan"
            },
            {
                text: "Search for Jeno, the silent protector",
                nextScene: 6,
                blEffect: 5,
                scEffect: 0,
                requiredCharacter: "jeno"
            },
            {
                text: "Wait for Jisung, the youngest member",
                nextScene: 7,
                blEffect: 5,
                scEffect: 0,
                requiredCharacter: "jisung"
            }
        ]
    },
    {
        id: 2,
        text: "Mark looks at you with his piercing eyes. 'Why did you choose me?' he asks, his voice calm but intense.",
        choices: [
            {
                text: "'Because I admire your strength and leadership' (Increase BL)",
                nextScene: 8,
                blEffect: 15,
                scEffect: 0
            },
            {
                text: "'I want to learn how to control others like you do' (Increase SC)",
                nextScene: 9,
                blEffect: 0,
                scEffect: 20
            },
            {
                text: "'I didn't choose you, you chose me' (Neutral)",
                nextScene: 10,
                blEffect: 5,
                scEffect: 5
            }
        ]
    }
];

const ENDINGS = [
    {
        id: "pure_romance",
        name: "Pure Romance Ending",
        description: "You've formed a deep, pure bond with your chosen partner. The light of your love shines brightly in Eclipsia.",
        image: "https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg",
        conditions: {
            bl: 100,
            sc: 20,
            maxCharacters: 1
        }
    },
    {
        id: "harem",
        name: "Harem Ending",
        description: "You've managed to win the hearts of multiple guardians. While they all care for you, there's an underlying tension in the air...",
        image: "https://images.pexels.com/photos/3184398/pexels-photo-3184398.jpeg",
        conditions: {
            bl: 70,
            sc: 50,
            minCharacters: 3
        }
    },
    {
        id: "shadow_possession",
        name: "Shadow Possession Ending",
        description: "The dark energy of Eclipsia has consumed you. You now rule over the city with an iron fist, your former lovers now your subjects.",
        image: "https://images.pexels.com/photos/235985/pexels-photo-235985.jpeg",
        conditions: {
            sc: 100
        }
    },
    {
        id: "tragic",
        name: "Tragic Ending",
        description: "Your inability to form meaningful connections has left you alone in the dark. The shadows claim you as one of their own.",
        image: "https://images.pexels.com/photos/1114897/pexels-photo-1114897.jpeg",
        conditions: {
            bl: 30,
            sc: 100,
            maxBlPerCharacter: 10
        }
    }
];

// Game State
let gameState = {
    selectedCharacters: [],
    currentScene: 1,
    blScore: 0,
    scScore: 0,
    characterBL: {},
    costumes: {}
};

// DOM Elements
const homeScreen = document.getElementById('home');
const storyScreen = document.getElementById('story');
const endingScreen = document.getElementById('ending');
const charactersContainer = document.getElementById('characters');
const startButton = document.getElementById('start-btn');
const dialogueText = document.getElementById('dialogue-text');
const choicesContainer = document.getElementById('choices');
const blBar = document.getElementById('bl-bar');
const scBar = document.getElementById('sc-bar');
const blValue = document.getElementById('bl-value');
const scValue = document.getElementById('sc-value');
const costumeBtn = document.getElementById('costume-btn');
const costumeModal = document.getElementById('costume-modal');
const closeCostumeBtn = document.getElementById('close-costume');
const costumeSelection = document.getElementById('costume-selection');
const endingImage = document.getElementById('ending-image');
const endingTitle = document.getElementById('ending-title');
const endingDescription = document.getElementById('ending-text');
const restartButton = document.getElementById('restart-btn');

// Initialize the game
function init() {
    loadCharacters();
    loadGameState();
    
    startButton.addEventListener('click', startGame);
    costumeBtn.addEventListener('click', openCostumeMenu);
    closeCostumeBtn.addEventListener('click', closeCostumeMenu);
    restartButton.addEventListener('click', restartGame);
}

// Load character selection screen
function loadCharacters() {
    CHARACTERS.forEach(character => {
        const characterCard = document.createElement('div');
        characterCard.className = 'character-card bg-gray-800 rounded-lg overflow-hidden fade-in';
        characterCard.dataset.characterId = character.id;
        characterCard.innerHTML = `
            <img src="${character.image}" alt="${character.name}" class="w-full h-64 object-cover">
            <div class="p-4">
                <h3 class="text-xl font-bold">${character.name}</h3>
                <p class="text-gray-400">${character.traits.join(', ')}</p>
            </div>
        `;
        
        characterCard.addEventListener('click', () => toggleCharacterSelection(character.id));
        charactersContainer.appendChild(characterCard);
    });
}

// Toggle character selection
function toggleCharacterSelection(characterId) {
    const characterCard = document.querySelector(`[data-character-id="${characterId}"]`);
    const index = gameState.selectedCharacters.indexOf(characterId);
    
    if (index === -1) {
        if (gameState.selectedCharacters.length < 6) {
            gameState.selectedCharacters.push(characterId);
            characterCard.classList.add('selected');
        }
    } else {
        gameState.selectedCharacters.splice(index, 1);
        characterCard.classList.remove('selected');
    }
    
    // Initialize BL for newly selected characters
    gameState.selectedCharacters.forEach(id => {
        if (!gameState.characterBL[id]) {
            gameState.characterBL[id] = 0;
        }
    });
    
    // Show/hide start button based on selection
    startButton.classList.toggle('hidden', gameState.selectedCharacters.length === 0);
}

// Start the game
function startGame() {
    if (gameState.selectedCharacters.length === 0) return;
    
    homeScreen.classList.add('hidden');
    storyScreen.classList.remove('hidden');
    
    // Initialize costumes
    gameState.selectedCharacters.forEach(id => {
        if (!gameState.costumes[id]) {
            gameState.costumes[id] = 'default';
        }
    });
    
    loadScene(gameState.currentScene);
    updateProgressBars();
    saveGameState();
}

// Load a scene
function loadScene(sceneId) {
    const scene = SCENES.find(s => s.id === sceneId);
    if (!scene) {
        checkEndings();
        return;
    }
    
    gameState.currentScene = sceneId;
    dialogueText.textContent = scene.text;
    choicesContainer.innerHTML = '';
    
    scene.choices.forEach(choice => {
        // Skip choices that require a character we didn't select
        if (choice.requiredCharacter && !gameState.selectedCharacters.includes(choice.requiredCharacter)) {
            return;
        }
        
        const choiceButton = document.createElement('button');
        choiceButton.className = 'choice-btn bg-gray-700 hover:bg-gray-600 p-4 rounded-lg text-left fade-in';
        choiceButton.textContent = choice.text;
        
        // Add icons based on effects
        if (choice.blEffect > 0) {
            choiceButton.innerHTML += ` <span class="text-green-400"><i class="fas fa-heart"></i> +${choice.blEffect}</span>`;
        }
        if (choice.scEffect > 0) {
            choiceButton.innerHTML += ` <span class="text-purple-400"><i class="fas fa-moon"></i> +${choice.scEffect}</span>`;
        }
        
        choiceButton.addEventListener('click', () => makeChoice(choice));
        choicesContainer.appendChild(choiceButton);
    });
    
    saveGameState();
}

// Handle player choice
function makeChoice(choice) {
    gameState.blScore += choice.blEffect || 0;
    gameState.scScore += choice.scEffect || 0;
    
    // Update character-specific BL if this choice is for a specific character
    if (choice.requiredCharacter) {
        gameState.characterBL[choice.requiredCharacter] += choice.blEffect || 0;
    }
    
    updateProgressBars();
    loadScene(choice.nextScene);
}

// Update progress bars
function updateProgressBars() {
    const blPercentage = Math.min(100, gameState.blScore);
    const scPercentage = Math.min(100, gameState.scScore);
    
    blBar.style.width = `${blPercentage}%`;
    scBar.style.width = `${scPercentage}%`;
    
    blValue.textContent = `${blPercentage}%`;
    scValue.textContent = `${scPercentage}%`;
    
    // Show SC bar only when SC > 0
    scBar.parentElement.parentElement.style.display = gameState.scScore > 0 ? 'flex' : 'none';
}

// Check for endings
function checkEndings() {
    let matchedEnding = null;
    
    // Check each ending condition
    for (const ending of ENDINGS) {
        const conditions = ending.conditions;
        let conditionsMet = true;
        
        // Check BL condition
        if (conditions.bl !== undefined && gameState.blScore < conditions.bl) {
            conditionsMet = false;
        }
        
        // Check SC condition
        if (conditions.sc !== undefined && gameState.scScore < conditions.sc) {
            conditionsMet = false;
        }
        
        // Check max characters condition
        if (conditions.maxCharacters !== undefined && 
            gameState.selectedCharacters.length > conditions.maxCharacters) {
            conditionsMet = false;
        }
        
        // Check min characters condition
        if (conditions.minCharacters !== undefined && 
            gameState.selectedCharacters.length < conditions.minCharacters) {
            conditionsMet = false;
        }
        
        // Check max BL per character condition
        if (conditions.maxBlPerCharacter !== undefined) {
            const allBelowThreshold = Object.values(gameState.characterBL)
                .every(bl => bl <= conditions.maxBlPerCharacter);
            if (!allBelowThreshold) {
                conditionsMet = false;
            }
        }
        
        if (conditionsMet) {
            matchedEnding = ending;
            break;
        }
    }
    
    if (matchedEnding) {
        showEnding(matchedEnding);
    } else {
        // Default ending if none matched
        showEnding({
            id: "default",
            name: "Unfinished Journey",
            description: "Your story in Eclipsia remains incomplete. Perhaps another time you'll find your true path...",
            image: "https://images.pexels.com/photos/235985/pexels-photo-235985.jpeg"
        });
    }
}

// Show ending screen
function showEnding(ending) {
    storyScreen.classList.add('hidden');
    endingScreen.classList.remove('hidden');
    
    endingImage.src = ending.image;
    endingTitle.textContent = ending.name;
    endingDescription.textContent = ending.description;
}

// Open costume menu
function openCostumeMenu() {
    costumeSelection.innerHTML = '';
    
    gameState.selectedCharacters.forEach(characterId => {
        const character = CHARACTERS.find(c => c.id === characterId);
        if (!character) return;
        
        const characterSection = document.createElement('div');
        characterSection.className = 'col-span-2 md:col-span-3';
        characterSection.innerHTML = `<h3 class="text-xl font-bold mb-2">${character.name}</h3>`;
        
        const costumesContainer = document.createElement('div');
        costumesContainer.className = 'grid grid-cols-3 gap-2 mb-6';
        
        for (const [costumeId, imageUrl] of Object.entries(character.costumes)) {
            const costumeOption = document.createElement('div');
            costumeOption.className = `costume-option cursor-pointer ${gameState.costumes[characterId] === costumeId ? 'selected' : ''}`;
            costumeOption.dataset.characterId = characterId;
            costumeOption.dataset.costumeId = costumeId;
            
            costumeOption.innerHTML = `
                <img src="${imageUrl}" alt="${costumeId}" class="w-full h-24 object-cover rounded">
                <p class="text-sm text-center mt-1 capitalize">${costumeId}</p>
            `;
            
            costumeOption.addEventListener('click', () => selectCostume(characterId, costumeId));
            costumesContainer.appendChild(costumeOption);
        }
        
        characterSection.appendChild(costumesContainer);
        costumeSelection.appendChild(characterSection);
    });
    
    costumeModal.classList.remove('hidden');
}

// Select costume
function selectCostume(characterId, costumeId) {
    gameState.costumes[characterId] = costumeId;
    saveGameState();
    
    // Update selected state in UI
    document.querySelectorAll(`[data-character-id="${characterId}"]`).forEach(option => {
        option.classList.remove('selected');
    });
    document.querySelector(`[data-character-id="${characterId}"][data-costume-id="${costumeId}"]`).classList.add('selected');
}

// Close costume menu
function closeCostumeMenu() {
    costumeModal.classList.add('hidden');
}

// Restart game
function restartGame() {
    gameState = {
        selectedCharacters: [],
        currentScene: 1,
        blScore: 0,
        scScore: 0,
        characterBL: {},
        costumes: {}
    };
    
    endingScreen.classList.add('hidden');
    homeScreen.classList.remove('hidden');
    
    // Reset character selections
    document.querySelectorAll('.character-card').forEach(card => {
        card.classList.remove('selected');
    });
    startButton.classList.add('hidden');
    
    saveGameState();
}

// Save game state to localStorage
function saveGameState() {
    localStorage.setItem('eclipseBondsGameState', JSON.stringify(gameState));
}

// Load game state from localStorage
function loadGameState() {
    const savedState = localStorage.getItem('eclipseBondsGameState');
    if (savedState) {
        gameState = JSON.parse(savedState);
        
        // Restore character selections in UI
        gameState.selectedCharacters.forEach(id => {
            const card = document.querySelector(`[data-character-id="${id}"]`);
            if (card) card.classList.add('selected');
        });
        
        if (gameState.selectedCharacters.length > 0) {
            startButton.classList.remove('hidden');
        }
    }
}

// Initialize the game when the page loads
document.addEventListener('DOMContentLoaded', init);