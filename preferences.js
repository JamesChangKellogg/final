// Add see matches button
function seeMatches(){
    document.querySelector('.seeMatches').innerHTML = `
    <button class="text-2xl m-6 text-white bg-purple-900 rounded-xl font-bold text-center border-2 px-2 py-2 border-purple-500" id="seeMatches">
        <a href=matches.html>
        See matches!
        </a>
    </button>
    `
}

// Event listener for authenticated user
firebase.auth().onAuthStateChanged(async function(user) {
    let submitPreferences = document.querySelector(`#savePreferences`)
    submitPreferences.addEventListener('click', async function(event) {
        // Get firebase
        let db = firebase.firestore()
        // Create variables to submit for preferences
        let a = document.getElementById("industry")
        let industry = a.options[a.selectedIndex].text

        let b = document.getElementById("role")
        let role = b.options[b.selectedIndex].text

        let c = document.getElementById("size")
        let size = c.options[c.selectedIndex].text

        let d = document.getElementById("geography")
        let geography = d.options[d.selectedIndex].text

        let e = document.getElementById("entrepreneur")
        let entrepreneur = e.options[e.selectedIndex].text

        db.collection('preferences').doc(user.uid).set({
            userID: user.uid,
            name: user.displayName,
            email: user.email,
            industry: industry,
            role: role,
            size: size,
            geography: geography,
            entrepreneur: entrepreneur,
            matchingFactor: ''
        })

        // Prompt user to select important factor
        document.querySelector('.factorprompt').innerHTML = `
        <div class ="flex justify-center text-2xl italic m-10">What factor is most important in your match?</div>
        `
        // Create filter buttons
        document.querySelector('.filters').innerHTML = `
        <div class="text-center text-xl text-purple-500 px-4 md:py-2">Factors:</div>
        <div class="text-center"><a href="#" id="industry-factor" class="filter-button inline-block border-2 bg-purple-900 border-purple-500 text-white rounded px-4 py-2">Industry</a></div>
        <div class="text-center"><a href="#" id="role-factor" class="filter-button inline-block border-2 bg-purple-900 border-purple-500 text-white rounded px-4 py-2">Role</a></div>
        <div class="text-center"><a href="#" id="size-factor" class="filter-button inline-block border-2 bg-purple-900 border-purple-500 text-white rounded px-4 py-2">Size</a></div>
        <div class="text-center"><a href="#" id="geography-factor" class="filter-button inline-block border-2 bg-purple-900 border-purple-500 text-white rounded px-4 py-2">Geography</a></div>
        <div class="text-center"><a href="#" id="entrepreneur-factor" class="filter-button inline-block border-2 bg-purple-900 border-purple-500 text-white rounded px-4 py-2">Entrepreneur</a></div>    
        `

        // 1️⃣ Industry filter workflow 
        let industryButton = document.querySelector('#industry-factor')
        industryButton.addEventListener('click', async function(event) {
            event.preventDefault()
            // Update 'preferences' collection in Firebase
            let db = firebase.firestore()
            db.collection('preferences').doc(user.uid).update({
                matchingFactor: `industry`,
            })
            seeMatches()

            // Change opacity class to indicate if button is 'pressed'
            if (industryButton.classList.contains('opacity-20')) {
                industryButton.classList.remove('opacity-20')
            } else {
                industryButton.classList.add('opacity-20')
            }
        })

        // 2️⃣ Role filter workflow 
        let roleButton = document.querySelector('#role-factor')
        roleButton.addEventListener('click', async function(event) {
            event.preventDefault()
            // Update 'preferences' collection in Firebase
            let db = firebase.firestore()
            db.collection('preferences').doc(user.uid).update({
                matchingFactor: `role`,
            })
            seeMatches()
            
            // Change opacity class to indicate if button is 'pressed'
            if (roleButton.classList.contains('opacity-20')) {
                roleButton.classList.remove('opacity-20')
            } else {
                roleButton.classList.add('opacity-20')
            }
        })

        // 3️⃣ Size filter workflow 
        let sizeButton = document.querySelector('#size-factor')
        sizeButton.addEventListener('click', async function(event) {
            event.preventDefault()
            // Update 'preferences' collection in Firebase
            let db = firebase.firestore()
            db.collection('preferences').doc(user.uid).update({
                matchingFactor: `size`,
            })
            seeMatches()

            // Change opacity class to indicate if button is 'pressed'
            if (sizeButton.classList.contains('opacity-20')) {
                sizeButton.classList.remove('opacity-20')
            } else {
                sizeButton.classList.add('opacity-20')
            }
        })

        // 4️⃣ Geography filter workflow 
        let geographyButton = document.querySelector('#geography-factor')
        geographyButton.addEventListener('click', async function(event) {
            event.preventDefault()
            // Update 'preferences' collection in Firebase
            let db = firebase.firestore()
            db.collection('preferences').doc(user.uid).update({
                matchingFactor: `geography`,
            })
            seeMatches()

            // Change opacity class to indicate if button is 'pressed'
            if (geographyButton.classList.contains('opacity-20')) {
                geographyButton.classList.remove('opacity-20')
            } else {
                geographyButton.classList.add('opacity-20')
            }
        })

        // 5️⃣ Entrepreneur filter workflow 
        let entrepreneurButton = document.querySelector('#entrepreneur-factor')
        entrepreneurButton.addEventListener('click', async function(event) {
            event.preventDefault()
            // Update 'preferences' collection in Firebase
            let db = firebase.firestore()
            db.collection('preferences').doc(user.uid).update({
                matchingFactor: `entrepreneur`,
            })
            seeMatches()

            // Change opacity class to indicate if button is 'pressed'
            if (entrepreneurButton.classList.contains('opacity-20')) {
                entrepreneurButton.classList.remove('opacity-20')
            } else {
                entrepreneurButton.classList.add('opacity-20')
            }
        })
    // End primary button event listener
    })
// End final event listener
})



    // })