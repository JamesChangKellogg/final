// function to render matches
function renderMatch(matchID, matchName, matchEmail, matchIndustry, matchRole, matchSize, matchGeography, matchEntrepreneur){
    document.querySelector('.matches').insertAdjacentHTML('beforeend',`
    <div class="match-${matchID} w-full m-4 border-4 border-gray-800 text-xs">
        <div class="text-center font-bold m-1">${matchName}</h1>
        <div class="m-1 text-left">Email: ${matchEmail}</div>
        <div class="m-1 text-left">Industry: ${matchIndustry}</div>
        <div class="m-1 text-left">Role: ${matchRole}</div>
        <div class="m-1 text-left">Company size: ${matchSize}</div>
        <div class="m-1 text-left">Geo: ${matchGeography}</div>
        <div class="m-1 text-left">Entrepreneur?: ${matchEntrepreneur}</div>
        <button class="save-button-${matchID} text-white bg-purple-900 rounded-xl font-bold text-center border-2 px-2 py-2 border-purple-500">
            Save match
        </button>
    </div>
    `)
}

// function to change opacity of saved matches
function saveButtonClicked(matchID) { 
    document.querySelector(`.save-button-${matchID}`).classList.add('opacity-20')
}


// Event listener for authenticated user
firebase.auth().onAuthStateChanged(async function(user) {
    if (user) {
    // Create variables for all of logged-in user's data
    let userID = user.uid
    let response = await fetch(`/.netlify/functions/get_matches?userId=${userID}`)
    let matchesDocs = await response.json()

    // For loop to collect data and render matches
    for (let i=0; i<matchesDocs.length; i++) {
            let match = matchesDocs[i] // Match-level data
            let matchID = match.matchID
            let matchName = match.matchName
            let matchEmail = match.matchEmail 
            let matchIndustry = match.matchIndustry 
            let matchRole = match.matchRole
            let matchSize = match.matchSize 
            let matchGeography = match.matchGeography
            let matchEntrepreneur = match.matchEntrepreneur

    // Function to render matches
    renderMatch(matchID, matchName, matchEmail, matchIndustry, 
        matchRole, matchSize, matchGeography, matchEntrepreneur)

            // // Add click listener for save matches
            let saveButton = document.querySelector(`.save-button-${matchID}`)
            saveButton.addEventListener('click', async function(event) {
                event.preventDefault()

                // interact with create_save backend
                let response = await fetch('/.netlify/functions/create_save', {
                    method: 'POST',
                    body: JSON.stringify({
                        userID: userID,
                        matchID: matchID,
                        matchName: matchName,
                        matchEmail:  matchEmail,
                        matchIndustry: matchIndustry, 
                        matchRole: matchRole,
                        matchSize: matchSize,
                        matchGeography: matchGeography,
                        matchEntrepreneur: matchEntrepreneur
                    })
                })
                alert(`${matchName} saved!`)
                saveButtonClicked(matchID)
            })
        // Remove user profile
        let userCard = document.querySelector(`.match-${userID}`)
        if(userCard){
            userCard.style.display ="none"
            } // close if statement 
        } // close for loop
    } // close if statement
  
    else {
        document.location.href="homepage.html"
    }

// end event listener for authenticated user
})