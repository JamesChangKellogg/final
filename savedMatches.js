// function to render matches
function renderSavedMatch(matchID, matchName, matchEmail, matchIndustry, matchRole, matchSize, matchGeography, matchEntrepreneur){
    document.querySelector('.matches').insertAdjacentHTML('beforeend',`
    <div class="match-${matchID} w-full m-4 border-4 border-gray-800 text-xs">
        <div class="text-center font-bold m-1">${matchName}</h1>
        <div class="m-1 text-left">Email: ${matchEmail}</div>
        <div class="m-1 text-left">Industry: ${matchIndustry}</div>
        <div class="m-1 text-left">Role: ${matchRole}</div>
        <div class="m-1 text-left">Company size: ${matchSize}</div>
        <div class="m-1 text-left">Geo: ${matchGeography}</div>
        <div class="m-1 text-left">Entrepreneur?: ${matchEntrepreneur}</div>
        <button class="save-button-${matchID} text-white bg-purple-900 rounded-xl font-bold text-center border-2 px-2 py-2 border-purple-500">
            Remove Saved Buddy
        </button>
    </div>
    `)
}

// function to change opacity of remove save button
function saveButtonClicked(savedID) { 
    document.querySelector(`.save-button-${savedID}`).classList.add('opacity-20')
}

// Event listener for authenticated user
firebase.auth().onAuthStateChanged(async function(user) {
    if (user) {
    // Create variables for all of logged-in user's data
    let userID = user.uid

    let response = await fetch(`/.netlify/functions/get_savedMatches?userId=${userID}`)
    let savedMatchesDocs = await response.json()
    
    console.log(savedMatchesDocs.length) 

        // For loop to go through docs and get data
        for (let i=0; i<savedMatchesDocs.length; i++) {
            let saved = savedMatchesDocs[i] // saved-level data
            let savedID = saved.savedID
            let savedName = saved.savedName 
            let savedEmail = saved.savedEmail 
            let savedIndustry = saved.savedIndustry 
            let savedRole = saved.savedRole 
            let savedSize = saved.savedSize 
            let savedGeography = saved.savedGeography
            let savedEntrepreneur = saved.savedEntrepreneur

            // RenderMatch
            renderSavedMatch(savedID, savedName, savedEmail, savedIndustry, 
                savedRole, savedSize, savedGeography, savedEntrepreneur)
            
            // // Add click listener for save matches: savedID = matchID (from preferences.js)
            // let unsaveButton = document.querySelector(`.save-button-${savedID}`)
            // unsaveButton.addEventListener('click', async function(event) {
            //     event.preventDefault()
            //     let response = await fetch(`/.netlify/functions/delete_saved?userId=${userID}?savedId=${savedID}`)
            // })

            // //     let db = firebase.firestore()
            // //     db.collection('savedMatches').doc(`${userID}-${savedID}`).delete()
            // //     alert(`${savedName} is removed!`)
            // //     saveButtonClicked(savedID)
            // // }) // close event listener

        } // close for loops

        } else {
            document.location.href="index.html"
        }
}) // end auth listener
