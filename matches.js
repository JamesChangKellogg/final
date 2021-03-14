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

    // Create variables for all of logged-in user's data
    let userID = user.uid
    let db = firebase.firestore()      // Get firebase
    let userRef = await db.collection('preferences').doc(user.uid).get()
    let userRefData = userRef.data()
    let userMatchingFactor = userRefData.matchingFactor
    let userIndustry = userRefData.industry
    let userRole = userRefData.role
    let userSize = userRefData.size
    let userGeography = userRefData.geography
    let userEntrepreneur = userRefData.entrepreneur

    // 🟢 START: 1️⃣ of 5️⃣ if statements: Industry
    if (userMatchingFactor = "industry"){
        let db = firebase.firestore()   // Get firebase
        // Query where industry preferences are the same as the user's
        let querySnapshot = await db.collection('preferences').where('industry', '==', userIndustry).get()
        let matchesDocs = querySnapshot.docs 

        // For loop to go through docs and get data
        for (let i=0; i<matchesDocs.length; i++) {
            let match = matchesDocs[i].data() // Match-level data
            let matchID = match.userID
            let matchName = match.name 
            let matchEmail = match.email 
            let matchIndustry = match.industry 
            let matchRole = match.role 
            let matchSize = match.size 
            let matchGeography = match.geography
            let matchEntrepreneur = match.entrepreneur

            // RenderMatch
            renderMatch(matchID, matchName, matchEmail, matchIndustry, 
                matchRole, matchSize, matchGeography, matchEntrepreneur)

            // Add click listener for save matches
            let saveButton = document.querySelector(`.save-button-${matchID}`)
            saveButton.addEventListener('click', async function(event) {
                event.preventDefault()
                let db = firebase.firestore()
                db.collection('savedMatches').doc(`${userID}-${matchID}`).set({
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
                 alert(`${matchName} was saved!`)
                 saveButtonClicked(matchID) 
            }) // close click event listener

        } // close for loop to write user cards

        // Remove user profile
        let userCard = document.querySelector(`.match-${userID}`)
        userCard.style.display ="none"
    
    } // 🛑 CLOSE: 1️⃣ of 5️⃣ if statements: Industry

    // 🟢 START: 2️⃣ of 5️⃣ if statements: role
    else if (userMatchingFactor = "role"){
        let db = firebase.firestore()   // Get firebase
        // Query where role preferences are the same as the user's
        let querySnapshot = await db.collection('preferences').where('role', '==', userRole).get()
        let matchesDocs = querySnapshot.docs 

        // For loop to go through docs and get data
        for (let i=0; i<matchesDocs.length; i++) {
            let match = matchesDocs[i].data() // Match-level data
            let matchID = match.userID
            let matchName = match.name 
            let matchEmail = match.email 
            let matchIndustry = match.industry 
            let matchRole = match.role 
            let matchSize = match.size 
            let matchGeography = match.geography
            let matchEntrepreneur = match.entrepreneur

            // RenderMatch
            renderMatch(matchID, matchName, matchEmail, matchIndustry, 
                matchRole, matchSize, matchGeography, matchEntrepreneur)

            // Add click listener for save matches
            let saveButton = document.querySelector(`.save-button-${matchID}`)
            saveButton.addEventListener('click', async function(event) {
                event.preventDefault()
                let db = firebase.firestore()
                db.collection('savedMatches').doc(`${userID}-${matchID}`).set({
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
                 alert(`${matchName} was saved!`)
                 saveButtonClicked(matchID) 
            }) // close click event listener

        } // close for loop to write user cards

        // Remove user profile
        let userCard = document.querySelector(`.match-${userID}`)
        userCard.style.display ="none"
    
    } // 🛑 CLOSE: 2️⃣ of 5️⃣ if statements: role

    // 🟢 START: 3️⃣ of 5️⃣ if statements: size
    else if (userMatchingFactor = "size"){
        let db = firebase.firestore()   // Get firebase
        // Query where size preferences are the same as the user's
        let querySnapshot = await db.collection('preferences').where('size', '==', userSize).get()
        let matchesDocs = querySnapshot.docs 

        // For loop to go through docs and get data
        for (let i=0; i<matchesDocs.length; i++) {
            let match = matchesDocs[i].data() // Match-level data
            let matchID = match.userID
            let matchName = match.name 
            let matchEmail = match.email 
            let matchIndustry = match.industry 
            let matchRole = match.role 
            let matchSize = match.size 
            let matchGeography = match.geography
            let matchEntrepreneur = match.entrepreneur

            // RenderMatch
            renderMatch(matchID, matchName, matchEmail, matchIndustry, 
                matchRole, matchSize, matchGeography, matchEntrepreneur)

            // Add click listener for save matches
            let saveButton = document.querySelector(`.save-button-${matchID}`)
            saveButton.addEventListener('click', async function(event) {
                event.preventDefault()
                let db = firebase.firestore()
                db.collection('savedMatches').doc(`${userID}-${matchID}`).set({
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
                    alert(`${matchName} was saved!`)
                    saveButtonClicked(matchID) 
            }) // close click event listener

        } // close for loop to write user cards

        // Remove user profile
        let userCard = document.querySelector(`.match-${userID}`)
        userCard.style.display ="none"
    
    } // 🛑 CLOSE: 3️⃣ of 5️⃣ if statements: size

    // 🟢 START: 4️⃣ of 5️⃣ if statements: geography
    else if (userMatchingFactor = "geography"){
        let db = firebase.firestore()   // Get firebase
        // Query where geography preferences are the same as the user's
        let querySnapshot = await db.collection('preferences').where('geography', '==', userGeography).get()
        let matchesDocs = querySnapshot.docs 

        // For loop to go through docs and get data
        for (let i=0; i<matchesDocs.length; i++) {
            let match = matchesDocs[i].data() // Match-level data
            let matchID = match.userID
            let matchName = match.name 
            let matchEmail = match.email 
            let matchIndustry = match.industry 
            let matchRole = match.role 
            let matchSize = match.size 
            let matchGeography = match.geography
            let matchEntrepreneur = match.entrepreneur

            // RenderMatch
            renderMatch(matchID, matchName, matchEmail, matchIndustry, 
                matchRole, matchSize, matchGeography, matchEntrepreneur)

            // Add click listener for save matches
            let saveButton = document.querySelector(`.save-button-${matchID}`)
            saveButton.addEventListener('click', async function(event) {
                event.preventDefault()
                let db = firebase.firestore()
                db.collection('savedMatches').doc(`${userID}-${matchID}`).set({
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
                    alert(`${matchName} was saved!`)
                    saveButtonClicked(matchID) 
            }) // close click event listener

        } // close for loop to write user cards

        // Remove user profile
        let userCard = document.querySelector(`.match-${userID}`)
        userCard.style.display ="none"
    
    } // 🛑 CLOSE: 4️⃣ of 5️⃣ if statements: geography

    // 🟢 START: 5️⃣ of 5️⃣ if statements: entrepreneur
    else if (userMatchingFactor = "entrepreneur"){
        let db = firebase.firestore()   // Get firebase
        // Query where entrepreneur preferences are the same as the user's
        let querySnapshot = await db.collection('preferences').where('entrepreneur', '==', userEntrepreneur).get()
        let matchesDocs = querySnapshot.docs 

        // For loop to go through docs and get data
        for (let i=0; i<matchesDocs.length; i++) {
            let match = matchesDocs[i].data() // Match-level data
            let matchID = match.userID
            let matchName = match.name 
            let matchEmail = match.email 
            let matchIndustry = match.industry 
            let matchRole = match.role 
            let matchSize = match.size 
            let matchGeography = match.geography
            let matchEntrepreneur = match.entrepreneur

            // RenderMatch
            renderMatch(matchID, matchName, matchEmail, matchIndustry, 
                matchRole, matchSize, matchGeography, matchEntrepreneur)

            // Add click listener for save matches
            let saveButton = document.querySelector(`.save-button-${matchID}`)
            saveButton.addEventListener('click', async function(event) {
                event.preventDefault()
                let db = firebase.firestore()
                db.collection('savedMatches').doc(`${userID}-${matchID}`).set({
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
                    alert(`${matchName} was saved!`)
                    saveButtonClicked(matchID) 
            }) // close click event listener

        } // close for loop to write user cards

        // Remove user profile
        let userCard = document.querySelector(`.match-${userID}`)
        userCard.style.display ="none"
    
    } //🛑 CLOSE Close 5️⃣ of 5️⃣ if statements: entrepreneur



// end event listener for authenticated user
})